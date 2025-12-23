import styles from "./DashboardHero.module.css";
import BrowserOnly from '@docusaurus/BrowserOnly';

interface DashboardHeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

export default function DashboardHero({
  title,
  subtitle,
  ctaText,
  ctaLink,
}: DashboardHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.kicker}>Portfolio Dashboards</p>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        <a className={styles.cta} href={ctaLink}>
          {ctaText}
          <svg
            className={styles.ctaIcon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      <div className={styles.heroVisual} aria-hidden="true">
        <BrowserOnly fallback={<div className={styles.fallbackGradient} />}>
          {() => {
            const Hero3DBackground = require('../Hero3D/Hero3DBackground').default;
            return <Hero3DBackground />;
          }}
        </BrowserOnly>
      </div>
    </section>
  );
}
