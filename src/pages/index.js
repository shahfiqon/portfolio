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
import DashboardHero from "../components/dashboard/DashboardHero";
import { getDashboardData } from "../utils/dashboardConfig";
import DashboardAnalytics from "../components/Dashboard/DashboardAnalytics";
import SocialSidebar from "../components/SocialSidebar/SocialSidebar";

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
        <meta property="og:title" content="Phoenix | Senior Software Engineer Portfolio" />
        <meta
          property="og:description"
          content="8+ years of experience building scalable systems and exceptional user experiences"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://shahfiqon.github.io/" />
      </Head>
      <SocialSidebar />
      <main className={styles.dashboardPage}>
        <div className={styles.dashboardContent}>
          <DashboardHero {...data.hero} />
          <DashboardAnalytics />
        </div>
      </main>
    </Layout>
  );
}
