import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi";
import { useHistory } from "@docusaurus/router";
import { Project } from "./ProjectCard";
import projectsData from "../../data/projectsDetailed.json";
import Link from "@docusaurus/Link";

const FeaturedProjects: React.FC = () => {
  const history = useHistory();
  const featuredProjects = (projectsData.projects as Project[]).filter(
    (project) => project.featured
  ).slice(0, 3); // Show max 3 featured projects

  if (featuredProjects.length === 0) {
    return null;
  }

  const handleProjectClick = (projectId: string) => {
    history.push(`/project?id=${projectId}`);
  };

  return (
    <section
      style={{
        width: "100%",
        maxWidth: "1400px",
        margin: "0 auto 60px auto",
        padding: "0 20px",
      }}
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "32px",
        }}
      >
        <div>
          <h2
            style={{
              fontSize: "clamp(24px, 4vw, 32px)",
              fontWeight: "700",
              margin: "0 0 8px 0",
              background:
                "linear-gradient(135deg, var(--ifm-color-primary) 0%, var(--ifm-color-primary-dark) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Featured Projects
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "var(--ifm-color-emphasis-700)",
              margin: 0,
            }}
          >
            Highlighted work showcasing technical excellence
          </p>
        </div>
        <Link
          to="/projects"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "10px 20px",
            backgroundColor: "var(--ifm-color-primary)",
            color: "white",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: "600",
            textDecoration: "none",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "0.9";
            e.currentTarget.style.transform = "translateX(4px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "1";
            e.currentTarget.style.transform = "translateX(0)";
          }}
        >
          View All
          <FiArrowRight size={16} />
        </Link>
      </motion.div>

      {/* Projects Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            style={{
              backgroundColor: "var(--ifm-card-background-color)",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "var(--ifm-global-shadow-md)",
              border: "1px solid var(--ifm-color-emphasis-200)",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onClick={() => handleProjectClick(project.id)}
          >
            {/* Thumbnail */}
            {project.media?.thumbnail && (
              <div
                style={{
                  width: "100%",
                  height: "160px",
                  backgroundColor: "var(--ifm-color-emphasis-200)",
                  backgroundImage: `url(${project.media.thumbnail})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            )}

            <div style={{ padding: "20px" }}>
              {/* Title and Featured Badge */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "start",
                  marginBottom: "12px",
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    fontSize: "18px",
                    fontWeight: "700",
                    color: "var(--ifm-font-color-base)",
                    flex: 1,
                  }}
                >
                  {project.title}
                </h3>
                <span
                  style={{
                    fontSize: "10px",
                    color: "var(--ifm-color-emphasis-600)",
                    whiteSpace: "nowrap",
                    marginLeft: "12px",
                  }}
                >
                  {new Date(project.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                  })}
                </span>
              </div>

              {/* Description */}
              <p
                style={{
                  margin: "0 0 16px 0",
                  fontSize: "14px",
                  lineHeight: "1.5",
                  color: "var(--ifm-color-emphasis-700)",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {project.description}
              </p>

              {/* Tech Stack - Compact */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "6px",
                  marginBottom: "16px",
                }}
              >
                {project.techStack.slice(0, 4).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    style={{
                      padding: "3px 8px",
                      backgroundColor: "var(--ifm-color-primary-lightest)",
                      color: "var(--ifm-color-primary-dark)",
                      borderRadius: "4px",
                      fontSize: "10px",
                      fontWeight: "600",
                    }}
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 4 && (
                  <span
                    style={{
                      padding: "3px 8px",
                      backgroundColor: "var(--ifm-color-emphasis-200)",
                      color: "var(--ifm-color-emphasis-700)",
                      borderRadius: "4px",
                      fontSize: "10px",
                      fontWeight: "500",
                    }}
                  >
                    +{project.techStack.length - 4}
                  </span>
                )}
              </div>

              {/* Links - Compact */}
              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  paddingTop: "12px",
                  borderTop: "1px solid var(--ifm-color-emphasis-200)",
                }}
              >
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      padding: "6px 12px",
                      backgroundColor: "var(--ifm-color-emphasis-200)",
                      color: "var(--ifm-font-color-base)",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "600",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "var(--ifm-color-emphasis-300)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "var(--ifm-color-emphasis-200)";
                    }}
                  >
                    <FiGithub size={14} />
                    Code
                  </a>
                )}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      padding: "6px 12px",
                      backgroundColor: "var(--ifm-color-primary)",
                      color: "white",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "600",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = "0.9";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = "1";
                    }}
                  >
                    <FiExternalLink size={14} />
                    Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
