import React, { useState, useEffect, useRef } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { useColorMode } from '@docusaurus/theme-common';
import styles from './CenteredHero.module.css';
import Link from '@docusaurus/Link';

interface CenteredHeroProps {
  greeting?: string;
  name: string;
  labels: string[];
  ctaText?: string;
  ctaLink?: string;
}

export default function CenteredHero({
  greeting = "Hello, I am",
  name,
  labels,
  ctaText = "View Projects",
  ctaLink = "/projects",
}: CenteredHeroProps) {
  const { colorMode } = useColorMode();
  const [displayedText, setDisplayedText] = useState('');
  const [currentLabelIndex, setCurrentLabelIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (labels.length === 0) return;

    const currentLabel = labels[currentLabelIndex];
    const typingSpeed = isDeleting ? 75 : 150;
    const pauseTime = isDeleting ? 50 : 2000;

    const type = () => {
      if (!isDeleting) {
        // Typing mode
        if (displayedText.length < currentLabel.length) {
          setDisplayedText(currentLabel.substring(0, displayedText.length + 1));
        } else {
          // Finished typing, pause then start deleting
          timeoutRef.current = setTimeout(() => {
            setIsDeleting(true);
          }, pauseTime);
        }
      } else {
        // Deleting mode
        if (displayedText.length > 0) {
          setDisplayedText(currentLabel.substring(0, displayedText.length - 1));
        } else {
          // Finished deleting, move to next label
          setIsDeleting(false);
          setCurrentLabelIndex((prev) => (prev + 1) % labels.length);
        }
      }
    };

    timeoutRef.current = setTimeout(type, typingSpeed);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [displayedText, isDeleting, currentLabelIndex, labels]);

  return (
    <section className={styles.heroSection}>
      {/* 3D Background */}
      <div className={styles.background3D}>
        <BrowserOnly fallback={<div className={styles.fallbackBackground} />}>
          {() => {
            const Hero3DBackground = require('../../components/Hero3D/Hero3DBackground').default;
            return <Hero3DBackground isDarkMode={colorMode === 'dark'} />;
          }}
        </BrowserOnly>
      </div>
      
      {/* Centered Content */}
      <div className={styles.heroContent}>
        {/* Greeting Badge */}
        <div className={styles.greetingBadge}>
          <span>{greeting}</span>
        </div>

        {/* Name with Animated Gradient */}
        <h1 className={styles.gradientName}>
          {name}
        </h1>

        {/* Typing Labels */}
        <div className={styles.typingContainer}>
          <span className={styles.typingText}>
            {displayedText}
            <span className={styles.cursor}>|</span>
          </span>
        </div>

        {/* CTA Button */}
        <Link to={ctaLink} className={styles.ctaButton}>
          {ctaText}
        </Link>
      </div>
    </section>
  );
}
