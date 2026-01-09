import React from "react";
import Layout from "@theme/Layout";
import { motion } from "framer-motion";
import { getPersonalInfo, getPageContent, getWhatIDoItems } from "../config/configHelpers";

export default function About() {
  const personal = getPersonalInfo();
  const pageContent = getPageContent('about');
  const whatIDoItems = getWhatIDoItems();
  return (
    <Layout
      title="About"
      description={`Learn more about ${personal.name} - ${personal.title}`}
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
            {pageContent.hero.title}
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
            {pageContent.hero.subtitle}
          </p>
        </motion.div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: "grid",
            gap: "40px",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              padding: "40px",
              backgroundColor: "var(--ifm-card-background-color)",
              borderRadius: "16px",
              border: "1px solid var(--ifm-color-emphasis-200)",
              boxShadow: "var(--ifm-global-shadow-md)",
            }}
          >
            <h2
              style={{
                fontSize: "28px",
                fontWeight: "700",
                marginBottom: "20px",
                color: "var(--ifm-font-color-base)",
              }}
            >
              {personal.title}
            </h2>
            {pageContent.bio.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                style={{
                  fontSize: "16px",
                  lineHeight: "1.8",
                  color: "var(--ifm-color-emphasis-700)",
                  marginBottom: index < pageContent.bio.paragraphs.length - 1 ? "16px" : "0",
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Skills Overview */}
          <div
            style={{
              padding: "40px",
              backgroundColor: "var(--ifm-card-background-color)",
              borderRadius: "16px",
              border: "1px solid var(--ifm-color-emphasis-200)",
              boxShadow: "var(--ifm-global-shadow-md)",
            }}
          >
            <h2
              style={{
                fontSize: "28px",
                fontWeight: "700",
                marginBottom: "20px",
                color: "var(--ifm-font-color-base)",
              }}
            >
              What I Do
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "24px",
              }}
            >
              {whatIDoItems.map((item, index) => (
                <div
                  key={index}
                  style={{
                    padding: "24px",
                    backgroundColor: "var(--ifm-color-emphasis-100)",
                    borderRadius: "12px",
                    transition: "transform 0.2s ease",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: "600",
                      marginBottom: "12px",
                      color: "var(--ifm-color-primary)",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: "1.6",
                      color: "var(--ifm-color-emphasis-700)",
                      margin: 0,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </main>
    </Layout>
  );
}

