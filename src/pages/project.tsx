import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import { useLocation, useHistory } from "@docusaurus/router";
import { motion } from "framer-motion";
import ProjectDetail from "../components/Projects/ProjectDetail";
import { Project } from "../components/Projects/ProjectCard";
import projectsData from "../data/projectsDetailed.json";
import { FiArrowLeft } from "react-icons/fi";

export default function ProjectPage() {
  const location = useLocation();
  const history = useHistory();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    // Get project ID from URL query parameter
    const params = new URLSearchParams(location.search);
    const projectId = params.get("id");

    if (projectId) {
      const foundProject = projectsData.projects.find(
        (p) => p.id === projectId
      ) as Project | undefined;
      
      if (foundProject) {
        setProject(foundProject);
      } else {
        // Project not found, redirect to projects page
        history.push("/projects");
      }
    } else {
      // No ID provided, redirect to projects page
      history.push("/projects");
    }
  }, [location.search, history]);

  if (!project) {
    return (
      <Layout
        title="Project"
        description="Project details"
      >
        <main
          style={{
            padding: "100px 20px 60px 20px",
            textAlign: "center",
            minHeight: "50vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "48px",
                marginBottom: "16px",
                opacity: 0.5,
              }}
            >
              ⏳
            </div>
            <p
              style={{
                fontSize: "18px",
                color: "var(--ifm-color-emphasis-700)",
              }}
            >
              Loading project details...
            </p>
          </div>
        </main>
      </Layout>
    );
  }

  return (
    <Layout
      title={project.title}
      description={project.description}
    >
      <main
        style={{
          padding: "100px 20px 60px 20px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            marginBottom: "32px",
          }}
        >
          <button
            onClick={() => history.push("/projects")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 20px",
              backgroundColor: "var(--ifm-color-emphasis-200)",
              color: "var(--ifm-font-color-base)",
              border: "none",
              borderRadius: "8px",
              fontSize: "15px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--ifm-color-emphasis-300)";
              e.currentTarget.style.transform = "translateX(-4px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "var(--ifm-color-emphasis-200)";
              e.currentTarget.style.transform = "translateX(0)";
            }}
          >
            <FiArrowLeft size={18} />
            Back to Projects
          </button>
        </motion.div>

        {/* Project Detail Component */}
        <ProjectDetail project={project} />
      </main>
    </Layout>
  );
}

