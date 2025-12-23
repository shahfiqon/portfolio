import React from "react";
import Layout from "@theme/Layout";
import { motion } from "framer-motion";
import ProjectsGrid from "../components/Projects/ProjectsGrid";

export default function Projects() {
  return (
    <Layout
      title="Projects"
      description="Portfolio of projects showcasing expertise in frontend, backend, and system design"
    >
      <main
        style={{
          padding: "60px 20px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: "center",
            marginBottom: "60px",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: "800",
              margin: "0 0 16px 0",
              background:
                "linear-gradient(135deg, var(--ifm-color-primary) 0%, var(--ifm-color-primary-dark) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Featured Projects
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "var(--ifm-color-emphasis-700)",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
          >
            A showcase of impactful projects spanning frontend engineering,
            backend systems, and full-stack applications. Each project
            demonstrates technical excellence and measurable business impact.
          </p>
        </motion.div>

        {/* Projects Grid with Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ProjectsGrid />
        </motion.div>
      </main>
    </Layout>
  );
}


