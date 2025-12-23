import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard, { Project } from "./ProjectCard";
import ProjectFilters from "./ProjectFilters";
import projectsData from "../../data/projectsDetailed.json";

const ProjectsGrid: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("");
  const [selectedTech, setSelectedTech] = useState("");
  const [sortBy, setSortBy] = useState("date-desc");

  const projects = projectsData.projects as Project[];

  // Extract unique domains and tech stack
  const allDomains = useMemo(() => {
    const domains = new Set<string>();
    projects.forEach((project) => {
      project.domains.forEach((domain) => domains.add(domain));
    });
    return Array.from(domains).sort();
  }, [projects]);

  const allTechStack = useMemo(() => {
    const tech = new Set<string>();
    projects.forEach((project) => {
      project.techStack.forEach((t) => tech.add(t));
    });
    return Array.from(tech).sort();
  }, [projects]);

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    let filtered = projects;

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.techStack.some((tech) =>
            tech.toLowerCase().includes(query)
          ) ||
          project.domains.some((domain) => domain.toLowerCase().includes(query))
      );
    }

    // Domain filter
    if (selectedDomain) {
      filtered = filtered.filter((project) =>
        project.domains.includes(selectedDomain)
      );
    }

    // Tech filter
    if (selectedTech) {
      filtered = filtered.filter((project) =>
        project.techStack.includes(selectedTech)
      );
    }

    // Sort
    const sorted = [...filtered];
    switch (sortBy) {
      case "date-desc":
        sorted.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        break;
      case "date-asc":
        sorted.sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        );
        break;
      case "featured":
        sorted.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return (
            new Date(b.date).getTime() - new Date(a.date).getTime()
          );
        });
        break;
    }

    return sorted;
  }, [projects, searchQuery, selectedDomain, selectedTech, sortBy]);

  return (
    <div>
      <ProjectFilters
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedDomain={selectedDomain}
        onDomainChange={setSelectedDomain}
        selectedTech={selectedTech}
        onTechChange={setSelectedTech}
        sortBy={sortBy}
        onSortChange={setSortBy}
        domains={allDomains}
        techStack={allTechStack}
      />

      {/* Results Count */}
      <div
        style={{
          marginBottom: "24px",
          fontSize: "15px",
          color: "var(--ifm-color-emphasis-700)",
        }}
      >
        Showing <strong>{filteredProjects.length}</strong> project
        {filteredProjects.length !== 1 ? "s" : ""}
        {(searchQuery || selectedDomain || selectedTech) && (
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedDomain("");
              setSelectedTech("");
            }}
            style={{
              marginLeft: "12px",
              padding: "4px 12px",
              fontSize: "13px",
              backgroundColor: "var(--ifm-color-emphasis-200)",
              color: "var(--ifm-font-color-base)",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Clear Filters
          </button>
        )}
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <motion.div
          layout
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
            gap: "24px",
          }}
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <div
          style={{
            textAlign: "center",
            padding: "60px 20px",
            backgroundColor: "var(--ifm-card-background-color)",
            borderRadius: "12px",
            border: "1px solid var(--ifm-color-emphasis-200)",
          }}
        >
          <div
            style={{
              fontSize: "48px",
              marginBottom: "16px",
              opacity: 0.5,
            }}
          >
            🔍
          </div>
          <h3
            style={{
              margin: "0 0 8px 0",
              fontSize: "20px",
              color: "var(--ifm-font-color-base)",
            }}
          >
            No projects found
          </h3>
          <p
            style={{
              margin: 0,
              fontSize: "15px",
              color: "var(--ifm-color-emphasis-600)",
            }}
          >
            Try adjusting your filters or search query
          </p>
        </div>
      )}
    </div>
  );
};

export default ProjectsGrid;


