import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import Heading from "@theme/Heading";
import styles from "./index.module.css";
//for nav bar
import Sidebar from "../components/Sidebar/Sidebar";

//for dashboard
import DashboardHero from "../components/dashboard/DashboardHero";
import { getDashboardData } from "../utils/dashboardConfig";
import DashboardAnalytics from "../components/Dashboard/DashboardAnalytics";
import { useState } from "react";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const data = getDashboardData();

  //to track the sidebar collapsed state
  const [isStateCollapsed, setIsStateCollapsed] = useState(false);

  return (
    <Layout
      title={`${siteConfig.title} dashboard`}
      description="Portfolio dashboard"
    >
      {/* //when collapsed, collapsed class will be added to the class */}
      <main
        className={clsx(styles.dashboardPage, {
          [styles.collapsed]: isStateCollapsed,
        })}
      >
        {/* //passing collapsed value as props to sidebar */}
        <Sidebar
          links={data.nav}
          isCollapsed={isStateCollapsed}
          onToggle={() => setIsStateCollapsed(!isStateCollapsed)}
        />

        <div className={styles.dashboardContent}>
          <DashboardHero {...data.hero} />
          <DashboardAnalytics />
        </div>
      </main>
    </Layout>
  );
}
