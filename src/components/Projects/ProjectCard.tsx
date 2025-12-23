import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiFileText } from "react-icons/fi";

interface ProjectImpact {
  [key: string]: string;
}

interface ProjectMedia {
  thumbnail?: string;
  demo?: string;
}

interface ProjectLinks {
  github?: string;
  demo?: string;
  caseStudy?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  role: string;
  contribution: string;
  impact: ProjectImpact;
  techStack: string[];
  domains: string[];
  media?: ProjectMedia;
  links: ProjectLinks;
  date: string;
  featured: boolean;
  status: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      style={{
        backgroundColor: "var(--ifm-card-background-color)",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "var(--ifm-global-shadow-md)",
        border: "1px solid var(--ifm-color-emphasis-200)",
        position: "relative",
        cursor: "pointer",
      }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Featured Badge */}
      {project.featured && (
        <div
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            backgroundColor: "var(--ifm-color-primary)",
            color: "white",
            padding: "4px 12px",
            borderRadius: "12px",
            fontSize: "11px",
            fontWeight: "600",
            zIndex: 1,
            textTransform: "uppercase",
            letterSpacing: "0.5px",
          }}
        >
          Featured
        </div>
      )}

      {/* Media Preview */}
      {project.media?.thumbnail && (
        <div
          style={{
            width: "100%",
            height: "200px",
            backgroundColor: "var(--ifm-color-emphasis-200)",
            backgroundImage: `url(${project.media.thumbnail})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "60px",
              background:
                "linear-gradient(to top, var(--ifm-card-background-color), transparent)",
            }}
          />
        </div>
      )}

      <div style={{ padding: "24px" }}>
        {/* Title and Date */}
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
              fontSize: "22px",
              fontWeight: "700",
              color: "var(--ifm-font-color-base)",
            }}
          >
            {project.title}
          </h3>
          <span
            style={{
              fontSize: "12px",
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
            fontSize: "15px",
            lineHeight: "1.6",
            color: "var(--ifm-color-emphasis-700)",
          }}
        >
          {project.description}
        </p>

        {/* Role and Contribution */}
        <div style={{ marginBottom: "16px" }}>
          <div
            style={{
              fontSize: "13px",
              color: "var(--ifm-color-emphasis-600)",
              marginBottom: "4px",
            }}
          >
            <strong style={{ color: "var(--ifm-font-color-base)" }}>
              Role:
            </strong>{" "}
            {project.role}
          </div>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              style={{
                fontSize: "13px",
                color: "var(--ifm-color-emphasis-600)",
                marginTop: "8px",
              }}
            >
              <strong style={{ color: "var(--ifm-font-color-base)" }}>
                Contribution:
              </strong>{" "}
              {project.contribution}
            </motion.div>
          )}
        </div>

        {/* Impact Metrics */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "8px",
            marginBottom: "16px",
          }}
        >
          {Object.entries(project.impact)
            .slice(0, isExpanded ? undefined : 2)
            .map(([key, value], index) => (
              <div
                key={index}
                style={{
                  padding: "8px 12px",
                  backgroundColor: "var(--ifm-color-emphasis-100)",
                  borderRadius: "8px",
                  fontSize: "12px",
                }}
              >
                <div
                  style={{
                    fontWeight: "700",
                    color: "var(--ifm-color-primary)",
                    marginBottom: "2px",
                  }}
                >
                  {value}
                </div>
                <div
                  style={{
                    color: "var(--ifm-color-emphasis-600)",
                    textTransform: "capitalize",
                  }}
                >
                  {key}
                </div>
              </div>
            ))}
        </div>

        {/* Tech Stack */}
        <div style={{ marginBottom: "16px" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "6px",
            }}
          >
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                style={{
                  padding: "4px 10px",
                  backgroundColor: "var(--ifm-color-primary-lightest)",
                  color: "var(--ifm-color-primary-dark)",
                  borderRadius: "6px",
                  fontSize: "11px",
                  fontWeight: "600",
                  border: "1px solid var(--ifm-color-primary-light)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Domains */}
        <div style={{ marginBottom: "20px" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "6px",
            }}
          >
            {project.domains.map((domain, index) => (
              <span
                key={index}
                style={{
                  padding: "4px 10px",
                  backgroundColor: "var(--ifm-color-emphasis-200)",
                  color: "var(--ifm-color-emphasis-800)",
                  borderRadius: "6px",
                  fontSize: "11px",
                  fontWeight: "500",
                }}
              >
                {domain}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            paddingTop: "16px",
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
                gap: "6px",
                padding: "8px 16px",
                backgroundColor: "var(--ifm-color-emphasis-200)",
                color: "var(--ifm-font-color-base)",
                borderRadius: "8px",
                fontSize: "13px",
                fontWeight: "600",
                textDecoration: "none",
                transition: "all 0.2s ease",
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
              <FiGithub size={16} />
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
                gap: "6px",
                padding: "8px 16px",
                backgroundColor: "var(--ifm-color-primary)",
                color: "white",
                borderRadius: "8px",
                fontSize: "13px",
                fontWeight: "600",
                textDecoration: "none",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.9";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
              }}
            >
              <FiExternalLink size={16} />
              Demo
            </a>
          )}
          {project.links.caseStudy && (
            <a
              href={project.links.caseStudy}
              onClick={(e) => e.stopPropagation()}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px 16px",
                backgroundColor: "var(--ifm-color-emphasis-200)",
                color: "var(--ifm-font-color-base)",
                borderRadius: "8px",
                fontSize: "13px",
                fontWeight: "600",
                textDecoration: "none",
                transition: "all 0.2s ease",
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
              <FiFileText size={16} />
              Case Study
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;


