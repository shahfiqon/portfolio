import styles from "./DashboardHero.module.css";

export default function DashboardHero({ title, subtitle, ctaText, ctaLink }) {
  return (
    <section className={styles.hero}>
      <div>
        <p className={styles.kicker}> Portfolio Dashboards</p>
        <h1>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        <a className={styles.cta} href={ctaLink}>
          {ctaText}
        </a>
      </div>
      <div className={styles.heroVisual} aria-hidden="true">
        <span />
      </div>
    </section>
  );
}
