import React from "react";
import Layout from "@theme/Layout";
import { motion } from "framer-motion";
import { getExperiencePageData } from "../config/configHelpers";

export default function Experience() {
  const experienceData = getExperiencePageData();
  const { hero, cta, experiences } = experienceData;

  return (
    <Layout
      title="Experience"
      description="Professional experience and career journey"
    >
      <main
        style={{
          padding: "100px 20px 60px 20px",
          maxWidth: "1200px",
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
            {hero.title}
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
            {hero.subtitle}
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              style={{
                marginBottom: "40px",
                padding: "32px",
                backgroundColor: "var(--ifm-card-background-color)",
                borderRadius: "16px",
                border: "1px solid var(--ifm-color-emphasis-200)",
                boxShadow: "var(--ifm-global-shadow-md)",
                position: "relative",
              }}
            >
              {/* Timeline Dot */}
              <div
                style={{
                  position: "absolute",
                  left: "-8px",
                  top: "40px",
                  width: "16px",
                  height: "16px",
                  backgroundColor: "var(--ifm-color-primary)",
                  borderRadius: "50%",
                  border: "4px solid var(--ifm-background-color)",
                  boxShadow: "0 0 0 4px var(--ifm-color-primary-lightest)",
                }}
              />

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "12px",
                  flexWrap: "wrap",
                  gap: "12px",
                }}
              >
                <div>
                  <h2
                    style={{
                      fontSize: "24px",
                      fontWeight: "700",
                      margin: "0 0 8px 0",
                      color: "var(--ifm-font-color-base)",
                    }}
                  >
                    {exp.role}
                  </h2>
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: "600",
                      margin: 0,
                      color: "var(--ifm-color-primary)",
                    }}
                  >
                    {exp.company}
                  </h3>
                </div>
                <span
                  style={{
                    padding: "6px 16px",
                    backgroundColor: "var(--ifm-color-primary-lightest)",
                    color: "var(--ifm-color-primary-dark)",
                    borderRadius: "20px",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  {exp.period}
                </span>
              </div>

              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.7",
                  color: "var(--ifm-color-emphasis-700)",
                  marginBottom: "20px",
                }}
              >
                {exp.description}
              </p>

              <div>
                <h4
                  style={{
                    fontSize: "14px",
                    fontWeight: "700",
                    marginBottom: "12px",
                    color: "var(--ifm-font-color-base)",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  Key Achievements
                </h4>
                <ul
                  style={{
                    margin: 0,
                    paddingLeft: "20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      style={{
                        fontSize: "15px",
                        lineHeight: "1.6",
                        color: "var(--ifm-color-emphasis-700)",
                      }}
                    >
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{
            marginTop: "60px",
            padding: "40px",
            backgroundColor: "var(--ifm-color-primary-lightest)",
            borderRadius: "16px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "28px",
              fontWeight: "700",
              marginBottom: "16px",
              color: "var(--ifm-font-color-base)",
            }}
          >
            {cta.title}
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "var(--ifm-color-emphasis-700)",
              marginBottom: "24px",
            }}
          >
            {cta.subtitle}
          </p>
          <a
            href={cta.buttonLink}
            style={{
              display: "inline-block",
              padding: "12px 32px",
              backgroundColor: "var(--ifm-color-primary)",
              color: "white",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "600",
              textDecoration: "none",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              boxShadow: "0 4px 14px rgba(59, 130, 246, 0.4)",
            }}
          >
            {cta.buttonText}
          </a>
        </motion.div>
      </main>
    </Layout>
  );
}

