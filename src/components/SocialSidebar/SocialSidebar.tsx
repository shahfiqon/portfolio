import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import styles from './SocialSidebar.module.css';

interface SocialLink {
  name: string;
  icon: React.ReactNode;
  url: string;
  color: string;
}

const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    icon: <FiGithub size={22} />,
    url: 'https://github.com/shahfiqon',
    color: '#333',
  },
  {
    name: 'LinkedIn',
    icon: <FiLinkedin size={22} />,
    url: 'https://linkedin.com/in/phoenix',
    color: '#0077b5',
  },
  {
    name: 'Email',
    icon: <FiMail size={22} />,
    url: 'mailto:phoenix@example.com',
    color: '#ea4335',
  },
];

export default function SocialSidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.socialLinks}>
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target={link.name !== 'Email' ? '_blank' : undefined}
            rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
            className={styles.socialLink}
            aria-label={link.name}
            title={link.name}
            style={{ '--hover-color': link.color } as React.CSSProperties}
          >
            {link.icon}
          </a>
        ))}
      </div>
      <div className={styles.divider} />
    </div>
  );
}

