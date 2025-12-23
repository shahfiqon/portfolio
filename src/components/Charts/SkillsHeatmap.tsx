import React from "react";
import skillsData from "../../data/skillsEnhanced.json";

interface Skill {
  name: string;
  proficiency: number;
  years: number;
}

interface Category {
  name: string;
  skills: Skill[];
}

const getColorIntensity = (proficiency: number): string => {
  if (proficiency >= 90) return "var(--skill-expert)";
  if (proficiency >= 80) return "var(--skill-advanced)";
  if (proficiency >= 70) return "var(--skill-proficient)";
  if (proficiency >= 60) return "var(--skill-intermediate)";
  return "var(--skill-beginner)";
};

const SkillsHeatmap: React.FC = () => {
  const categories = skillsData.categories as Category[];

  return (
    <div
      style={{
        backgroundColor: "var(--ifm-card-background-color)",
        borderRadius: "12px",
        padding: "24px",
        boxShadow: "var(--ifm-global-shadow-lw)",
        border: "1px solid var(--ifm-color-emphasis-200)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h3
          style={{
            margin: 0,
            fontSize: "20px",
            fontWeight: "600",
            color: "var(--ifm-font-color-base)",
          }}
        >
          Skills & Proficiency
        </h3>
      </div>

      <div style={{ marginBottom: "20px" }}>
        {categories.map((category, catIndex) => (
          <div
            key={catIndex}
            style={{
              marginBottom: "24px",
            }}
          >
            <h4
              style={{
                margin: "0 0 12px 0",
                fontSize: "16px",
                fontWeight: "600",
                color: "var(--ifm-color-emphasis-800)",
              }}
            >
              {category.name}
            </h4>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                gap: "8px",
              }}
            >
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  style={{
                    position: "relative",
                    padding: "12px",
                    backgroundColor: getColorIntensity(skill.proficiency),
                    borderRadius: "8px",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    border: "1px solid var(--ifm-color-emphasis-200)",
                  }}
                  className="skill-cell"
                  title={`${skill.name}: ${skill.proficiency}% proficiency, ${skill.years} years`}
                >
                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: "600",
                      color: "var(--ifm-font-color-base)",
                      marginBottom: "4px",
                    }}
                  >
                    {skill.name}
                  </div>
                  <div
                    style={{
                      fontSize: "11px",
                      color: "var(--ifm-color-emphasis-700)",
                    }}
                  >
                    {skill.proficiency}% • {skill.years}y
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: "0",
                      left: "0",
                      width: `${skill.proficiency}%`,
                      height: "3px",
                      backgroundColor: "var(--ifm-color-primary)",
                      borderRadius: "0 0 8px 0",
                      transition: "width 0.5s ease",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "16px",
          flexWrap: "wrap",
          marginTop: "20px",
          padding: "12px",
          backgroundColor: "var(--ifm-color-emphasis-100)",
          borderRadius: "8px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <div
            style={{
              width: "16px",
              height: "16px",
              backgroundColor: "var(--skill-expert)",
              borderRadius: "4px",
            }}
          />
          <span
            style={{
              fontSize: "12px",
              color: "var(--ifm-color-emphasis-700)",
            }}
          >
            Expert (90-100%)
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <div
            style={{
              width: "16px",
              height: "16px",
              backgroundColor: "var(--skill-advanced)",
              borderRadius: "4px",
            }}
          />
          <span
            style={{
              fontSize: "12px",
              color: "var(--ifm-color-emphasis-700)",
            }}
          >
            Advanced (80-89%)
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <div
            style={{
              width: "16px",
              height: "16px",
              backgroundColor: "var(--skill-proficient)",
              borderRadius: "4px",
            }}
          />
          <span
            style={{
              fontSize: "12px",
              color: "var(--ifm-color-emphasis-700)",
            }}
          >
            Proficient (70-79%)
          </span>
        </div>
      </div>

      <style>
        {`
          .skill-cell:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          }
        `}
      </style>
    </div>
  );
};

export default SkillsHeatmap;


