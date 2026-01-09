/**
 * Portfolio Configuration
 * 
 * Centralized configuration for the entire portfolio.
 * All personal information, page content, and site settings are defined here.
 * Update this file (and the JSON files it imports) to change portfolio content.
 */

import personalData from '../data/personal.json';
import contentData from '../data/content.json';
import experiencesData from '../data/experiences.json';
import featuresData from '../data/features.json';
import React from 'react';

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  email: string;
  location: string;
  github: string;
  linkedin: string;
  twitter: string;
  availability: {
    status: 'available' | 'unavailable' | 'limited';
    text: string;
    responseTime: string;
  };
  yearsExperience: string;
  urls: {
    site: string;
    github: string;
    linkedin: string;
    twitter: string;
  };
}

export interface SocialLink {
  name: string;
  icon: React.ReactNode;
  url: string;
  color: string;
}

export interface ContactMethod {
  icon: React.ReactNode;
  title: string;
  value: string;
  link: string;
  color: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface WhatIDoItem {
  title: string;
  description: string;
}

export interface Feature {
  title: string;
  svg: string;
  description: string;
}

export interface PageContent {
  about: {
    hero: {
      title: string;
      subtitle: string;
    };
    bio: {
      paragraphs: string[];
    };
    whatIDo: WhatIDoItem[];
  };
  contact: {
    hero: {
      title: string;
      subtitle: string;
      responseNote: string;
    };
    location: {
      title: string;
      text: string;
    };
    schedule: {
      title: string;
      text: string;
    };
  };
  home: {
    meta: {
      title: string;
      description: string;
    };
  };
}

export interface ExperiencePageData {
  hero: {
    title: string;
    subtitle: string;
  };
  cta: {
    title: string;
    subtitle: string;
    buttonText: string;
    buttonLink: string;
  };
  experiences: Experience[];
}

export interface NavItem {
  label: string;
  to?: string;
  href?: string;
  position?: 'left' | 'right';
  activeBaseRegex?: string;
}

export interface FooterLink {
  label: string;
  to?: string;
  href?: string;
}

export interface FooterSection {
  title: string;
  items: FooterLink[];
}

// ============================================================================
// CONFIGURATION DATA
// ============================================================================

export const personal: PersonalInfo = personalData as PersonalInfo;
export const content: PageContent = contentData as PageContent;
export const experiencePage: ExperiencePageData = experiencesData as ExperiencePageData;
export const features: Feature[] = featuresData.features;

// ============================================================================
// NAVIGATION CONFIGURATION
// ============================================================================

export const navbarItems: NavItem[] = [
  {
    label: 'Home',
    to: '/',
    position: 'left',
    activeBaseRegex: '^/$',
  },
  {
    label: 'About',
    to: '/about',
    position: 'left',
  },
  {
    label: 'Experience',
    to: '/experience',
    position: 'left',
  },
  {
    label: 'Projects',
    to: '/projects',
    position: 'left',
  },
  {
    label: 'Blogs',
    to: '/blog',
    position: 'left',
  },
];

export const footerLinks: FooterSection[] = [
  {
    title: 'Navigate',
    items: [
      { label: 'Home', to: '/' },
      { label: 'Projects', to: '/projects' },
      { label: 'Blog', to: '/blog' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Connect',
    items: [
      { label: 'GitHub', href: personal.urls.github },
      { label: 'LinkedIn', href: personal.urls.linkedin },
      { label: 'Twitter', href: personal.urls.twitter },
    ],
  },
  {
    title: 'Resources',
    items: [
      { label: 'GitHub', href: personal.urls.github },
      { label: 'Stack Overflow', href: 'https://stackoverflow.com' },
    ],
  },
];

// ============================================================================
// SITE METADATA
// ============================================================================

export const siteConfig = {
  title: `${personal.name} | ${personal.title}`,
  tagline: personal.tagline,
  favicon: 'img/favicon.svg',
  url: personal.urls.site,
  baseUrl: '/',
  organizationName: personal.github,
  projectName: `${personal.github}.github.io`,
  metadata: [
    {
      name: 'description',
      content: `${personal.title} portfolio showcasing experience in frontend, backend, and system design`,
    },
    {
      name: 'keywords',
      content: 'software engineer, portfolio, react, typescript, frontend, backend',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: `${personal.name} | ${personal.title} Portfolio` },
    { property: 'og:description', content: personal.tagline },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
  copyright: `Copyright © ${new Date().getFullYear()} ${personal.name}. Built with Docusaurus.`,
};

// ============================================================================
// EXPORT DEFAULT CONFIG
// ============================================================================

const portfolioConfig = {
  personal,
  content,
  experiencePage,
  features,
  navbarItems,
  footerLinks,
  siteConfig,
};

export default portfolioConfig;

