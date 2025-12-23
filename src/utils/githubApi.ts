interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface ContributionWeek {
  days: ContributionDay[];
}

export interface GitHubContributionsData {
  totalContributions: number;
  weeks: ContributionWeek[];
  currentStreak: number;
  longestStreak: number;
}

const CACHE_KEY = 'github_contributions_cache';
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour in milliseconds

interface CacheData {
  data: GitHubContributionsData;
  timestamp: number;
}

/**
 * Fetch GitHub contributions using GitHub's public contribution calendar
 * This scrapes the user's public profile contributions
 */
export async function fetchGitHubContributions(
  username: string
): Promise<GitHubContributionsData> {
  // Check cache first
  const cached = getFromCache(username);
  if (cached) {
    return cached;
  }

  try {
    // Fetch the user's GitHub profile page
    const response = await fetch(`https://github.com/users/${username}/contributions`);
    
    if (!response.ok) {
      throw new Error(`GitHub API responded with status: ${response.status}`);
    }

    const html = await response.text();
    
    // Parse the contribution data from the SVG
    const contributions = parseContributionsFromHTML(html);
    
    // Save to cache
    saveToCache(username, contributions);
    
    return contributions;
  } catch (error) {
    console.error('Error fetching GitHub contributions:', error);
    // Return mock data as fallback
    return getMockData();
  }
}

function parseContributionsFromHTML(html: string): GitHubContributionsData {
  // This is a simplified parser - in production you'd want a more robust solution
  // GitHub's contribution graph is in an SVG with data attributes
  
  const weeks: ContributionWeek[] = [];
  let totalContributions = 0;
  
  // Extract contribution data from data-level and data-count attributes
  const rectMatches = html.matchAll(/data-level="(\d+)"[^>]*data-count="(\d+)"[^>]*data-date="([^"]+)"/g);
  
  const contributionsByDate: Map<string, ContributionDay> = new Map();
  
  for (const match of rectMatches) {
    const level = parseInt(match[1]) as 0 | 1 | 2 | 3 | 4;
    const count = parseInt(match[2]);
    const date = match[3];
    
    contributionsByDate.set(date, { date, count, level });
    totalContributions += count;
  }
  
  // Group by weeks
  const dates = Array.from(contributionsByDate.keys()).sort();
  if (dates.length > 0) {
    let currentWeek: ContributionDay[] = [];
    
    dates.forEach((date, index) => {
      const day = contributionsByDate.get(date)!;
      currentWeek.push(day);
      
      // Sunday or last day
      const dayOfWeek = new Date(date).getDay();
      if (dayOfWeek === 6 || index === dates.length - 1) {
        weeks.push({ days: currentWeek });
        currentWeek = [];
      }
    });
  }
  
  // Calculate streaks
  const { currentStreak, longestStreak } = calculateStreaks(Array.from(contributionsByDate.values()));
  
  return {
    totalContributions,
    weeks,
    currentStreak,
    longestStreak,
  };
}

function calculateStreaks(contributions: ContributionDay[]): { currentStreak: number; longestStreak: number } {
  let currentStreak = 0;
  let longestStreak = 0;
  let tempStreak = 0;
  
  // Sort by date descending
  const sorted = [...contributions].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i].count > 0) {
      tempStreak++;
      if (i === 0 || (i > 0 && sorted[i - 1].count > 0)) {
        currentStreak = tempStreak;
      }
      longestStreak = Math.max(longestStreak, tempStreak);
    } else {
      if (i === 0) {
        currentStreak = 0;
      }
      tempStreak = 0;
    }
  }
  
  return { currentStreak, longestStreak };
}

function getFromCache(username: string): GitHubContributionsData | null {
  // Check if we're in a browser environment
  if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
    return null;
  }
  
  try {
    const cached = localStorage.getItem(`${CACHE_KEY}_${username}`);
    if (!cached) return null;
    
    const cacheData: CacheData = JSON.parse(cached);
    const now = Date.now();
    
    if (now - cacheData.timestamp < CACHE_DURATION) {
      return cacheData.data;
    }
    
    // Cache expired
    localStorage.removeItem(`${CACHE_KEY}_${username}`);
    return null;
  } catch (error) {
    console.error('Error reading from cache:', error);
    return null;
  }
}

function saveToCache(username: string, data: GitHubContributionsData): void {
  // Check if we're in a browser environment
  if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
    return;
  }
  
  try {
    const cacheData: CacheData = {
      data,
      timestamp: Date.now(),
    };
    localStorage.setItem(`${CACHE_KEY}_${username}`, JSON.stringify(cacheData));
  } catch (error) {
    console.error('Error saving to cache:', error);
  }
}

/**
 * Generate mock data for development/fallback
 */
function getMockData(): GitHubContributionsData {
  const weeks: ContributionWeek[] = [];
  const today = new Date();
  let totalContributions = 0;
  
  // Generate 52 weeks of data
  for (let week = 0; week < 52; week++) {
    const days: ContributionDay[] = [];
    
    for (let day = 0; day < 7; day++) {
      const date = new Date(today);
      date.setDate(date.getDate() - ((52 - week) * 7 + (6 - day)));
      
      // Random contribution count with some pattern
      const isWeekday = day > 0 && day < 6;
      const baseChance = isWeekday ? 0.7 : 0.4;
      const hasContribution = Math.random() < baseChance;
      const count = hasContribution ? Math.floor(Math.random() * 15) + 1 : 0;
      
      let level: 0 | 1 | 2 | 3 | 4 = 0;
      if (count === 0) level = 0;
      else if (count < 3) level = 1;
      else if (count < 6) level = 2;
      else if (count < 10) level = 3;
      else level = 4;
      
      totalContributions += count;
      
      days.push({
        date: date.toISOString().split('T')[0],
        count,
        level,
      });
    }
    
    weeks.push({ days });
  }
  
  return {
    totalContributions,
    weeks,
    currentStreak: 12,
    longestStreak: 47,
  };
}

