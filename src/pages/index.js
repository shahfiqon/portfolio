import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

//for dashboard
import CenteredHero from "../components/Hero/CenteredHero";
import { getDashboardData } from "../utils/dashboardConfig";
import DashboardAnalytics from "../components/Dashboard/DashboardAnalytics";
import SocialSidebar from "../components/SocialSidebar/SocialSidebar";
import personalData from "../data/personal.json";
import FeaturedProjects from "../components/Projects/FeaturedProjects";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const data = getDashboardData();

  return (
    <Layout
      title="Home"
      description="Senior Software Engineer portfolio showcasing experience in frontend, backend, and system design"
    >
      <Head>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Jane Zhang | Senior Software Engineer Portfolio" />
        <meta
          property="og:description"
          content="10+ years of experience building scalable systems and exceptional user experiences"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://shahfiqon.github.io/" />
      </Head>
      <SocialSidebar />
      <main className={styles.dashboardPage}>
        <CenteredHero
          greeting="Hello, I am"
          name={personalData.name}
          labels={data.hero.labels}
          ctaText={data.hero.ctaText}
          ctaLink={data.hero.ctaLink}
        />
        <div className={styles.dashboardContent}>
          <FeaturedProjects />
          <DashboardAnalytics />
        </div>
      </main>
    </Layout>
  );
}
