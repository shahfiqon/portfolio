import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

//for dashboard
import DashboardHero from "../components/dashboard/DashboardHero";
import { getDashboardData } from "../utils/dashboardConfig";
import DashboardAnalytics from "../components/Dashboard/DashboardAnalytics";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const data = getDashboardData();

  return (
    <Layout
      title={`${siteConfig.title} dashboard`}
      description="Portfolio dashboard"
    >
      <main className={styles.dashboardPage}>
        <div className={styles.dashboardContent}>
          <DashboardHero {...data.hero} />
          <DashboardAnalytics />
        </div>
      </main>
    </Layout>
  );
}
