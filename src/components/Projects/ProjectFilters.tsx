import React from "react";
import { FiSearch, FiFilter } from "react-icons/fi";

interface ProjectFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedDomain: string;
  onDomainChange: (domain: string) => void;
  selectedTech: string;
  onTechChange: (tech: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  domains: string[];
  techStack: string[];
}

const ProjectFilters: React.FC<ProjectFiltersProps> = ({
  searchQuery,
  onSearchChange,
  selectedDomain,
  onDomainChange,
  selectedTech,
  onTechChange,
  sortBy,
  onSortChange,
  domains,
  techStack,
}) => {
  return (
    <div
      style={{
        marginBottom: "32px",
        padding: "24px",
        backgroundColor: "var(--ifm-card-background-color)",
        borderRadius: "12px",
        border: "1px solid var(--ifm-color-emphasis-200)",
        boxShadow: "var(--ifm-global-shadow-lw)",
      }}
    >
      {/* Search Bar */}
      <div style={{ marginBottom: "20px" }}>
        <div style={{ position: "relative" }}>
          <FiSearch
            size={18}
            style={{
              position: "absolute",
              left: "14px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "var(--ifm-color-emphasis-600)",
            }}
          />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            style={{
              width: "100%",
              padding: "12px 12px 12px 44px",
              fontSize: "15px",
              border: "2px solid var(--ifm-color-emphasis-300)",
              borderRadius: "8px",
              backgroundColor: "var(--ifm-background-color)",
              color: "var(--ifm-font-color-base)",
              outline: "none",
              transition: "border-color 0.2s ease",
            }}
            onFocus={(e) => {
              e.target.style.borderColor = "var(--ifm-color-primary)";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "var(--ifm-color-emphasis-300)";
            }}
          />
        </div>
      </div>

      {/* Filters Row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "16px",
          alignItems: "center",
        }}
      >
        {/* Domain Filter */}
        <div>
          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "13px",
              fontWeight: "600",
              color: "var(--ifm-color-emphasis-700)",
              marginBottom: "8px",
            }}
          >
            <FiFilter size={14} />
            Domain
          </label>
          <select
            value={selectedDomain}
            onChange={(e) => onDomainChange(e.target.value)}
            style={{
              width: "100%",
              padding: "10px 12px",
              fontSize: "14px",
              border: "2px solid var(--ifm-color-emphasis-300)",
              borderRadius: "8px",
              backgroundColor: "var(--ifm-background-color)",
              color: "var(--ifm-font-color-base)",
              cursor: "pointer",
              outline: "none",
            }}
          >
            <option value="">All Domains</option>
            {domains.map((domain) => (
              <option key={domain} value={domain}>
                {domain}
              </option>
            ))}
          </select>
        </div>

        {/* Tech Filter */}
        <div>
          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "13px",
              fontWeight: "600",
              color: "var(--ifm-color-emphasis-700)",
              marginBottom: "8px",
            }}
          >
            <FiFilter size={14} />
            Technology
          </label>
          <select
            value={selectedTech}
            onChange={(e) => onTechChange(e.target.value)}
            style={{
              width: "100%",
              padding: "10px 12px",
              fontSize: "14px",
              border: "2px solid var(--ifm-color-emphasis-300)",
              borderRadius: "8px",
              backgroundColor: "var(--ifm-background-color)",
              color: "var(--ifm-font-color-base)",
              cursor: "pointer",
              outline: "none",
            }}
          >
            <option value="">All Technologies</option>
            {techStack.map((tech) => (
              <option key={tech} value={tech}>
                {tech}
              </option>
            ))}
          </select>
        </div>

        {/* Sort By */}
        <div>
          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "13px",
              fontWeight: "600",
              color: "var(--ifm-color-emphasis-700)",
              marginBottom: "8px",
            }}
          >
            Sort By
          </label>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            style={{
              width: "100%",
              padding: "10px 12px",
              fontSize: "14px",
              border: "2px solid var(--ifm-color-emphasis-300)",
              borderRadius: "8px",
              backgroundColor: "var(--ifm-background-color)",
              color: "var(--ifm-font-color-base)",
              cursor: "pointer",
              outline: "none",
            }}
          >
            <option value="date-desc">Newest First</option>
            <option value="date-asc">Oldest First</option>
            <option value="featured">Featured First</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProjectFilters;


