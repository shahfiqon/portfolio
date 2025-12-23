import React, { useEffect, useState } from 'react';
import { FiGithub, FiTrendingUp, FiZap } from 'react-icons/fi';
import { fetchGitHubContributions, GitHubContributionsData } from '../../utils/githubApi';
import styles from './GitHubContributions.module.css';

interface GitHubContributionsProps {
  username: string;
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function GitHubContributions({ username }: GitHubContributionsProps) {
  const [data, setData] = useState<GitHubContributionsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Only run on client side
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    async function loadContributions() {
      setLoading(true);
      setError(null);
      
      try {
        const contributions = await fetchGitHubContributions(username);
        setData(contributions);
      } catch (err) {
        setError('Failed to load GitHub contributions');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadContributions();
  }, [username, isMounted]);

  if (loading) {
    return (
      <section className={styles.container}>
        <div className={styles.loading}>
          <div className={styles.spinner} />
          <p>Loading GitHub contributions...</p>
        </div>
      </section>
    );
  }

  if (error || !data) {
    return (
      <section className={styles.container}>
        <div className={styles.error}>
          <p>{error || 'Unable to load contributions'}</p>
        </div>
      </section>
    );
  }

  // Get month labels for the graph
  const monthLabels: { month: string; weekIndex: number }[] = [];
  data.weeks.forEach((week, index) => {
    if (week.days.length > 0) {
      const date = new Date(week.days[0].date);
      const month = MONTHS[date.getMonth()];
      
      // Only add label if it's the first week of the month or first week overall
      if (index === 0 || date.getDate() <= 7) {
        monthLabels.push({ month, weekIndex: index });
      }
    }
  });

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titleSection}>
          <FiGithub className={styles.githubIcon} />
          <div>
            <h2 className={styles.title}>GitHub Activity</h2>
            <p className={styles.subtitle}>
              Contribution history for <a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer">@{username}</a>
            </p>
          </div>
        </div>
        
        <div className={styles.stats}>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <FiGithub />
            </div>
            <div className={styles.statInfo}>
              <div className={styles.statValue}>{data.totalContributions.toLocaleString()}</div>
              <div className={styles.statLabel}>Total Contributions</div>
            </div>
          </div>
          
          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <FiZap />
            </div>
            <div className={styles.statInfo}>
              <div className={styles.statValue}>{data.currentStreak}</div>
              <div className={styles.statLabel}>Current Streak</div>
            </div>
          </div>
          
          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <FiTrendingUp />
            </div>
            <div className={styles.statInfo}>
              <div className={styles.statValue}>{data.longestStreak}</div>
              <div className={styles.statLabel}>Longest Streak</div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.graphContainer}>
        <div className={styles.graph}>
          {/* Month labels */}
          <div className={styles.monthLabels}>
            {monthLabels.map((label, index) => (
              <span
                key={index}
                className={styles.monthLabel}
                style={{ gridColumn: label.weekIndex + 2 }}
              >
                {label.month}
              </span>
            ))}
          </div>

          {/* Day labels */}
          <div className={styles.dayLabels}>
            {['Mon', 'Wed', 'Fri'].map((day, index) => (
              <span key={day} className={styles.dayLabel} style={{ gridRow: index * 2 + 2 }}>
                {day}
              </span>
            ))}
          </div>

          {/* Contribution grid */}
          <div className={styles.grid}>
            {data.weeks.map((week, weekIndex) => (
              <div key={weekIndex} className={styles.week}>
                {week.days.map((day, dayIndex) => (
                  <div
                    key={`${weekIndex}-${dayIndex}`}
                    className={`${styles.day} ${styles[`level${day.level}`]}`}
                    data-count={day.count}
                    data-date={day.date}
                    title={`${day.count} contributions on ${day.date}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.legend}>
          <span className={styles.legendLabel}>Less</span>
          {[0, 1, 2, 3, 4].map((level) => (
            <div key={level} className={`${styles.legendBox} ${styles[`level${level}`]}`} />
          ))}
          <span className={styles.legendLabel}>More</span>
        </div>
      </div>
    </section>
  );
}

