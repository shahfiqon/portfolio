import React from "react";
import Layout from "@theme/Layout";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Layout
      title="About"
      description="Learn more about Phoenix - Senior Software Engineer"
    >
      <main
        style={{
          padding: "60px 20px",
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
            About Me
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
            Passionate about building scalable systems and exceptional user experiences
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
              Senior Software Engineer
            </h2>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.8",
                color: "var(--ifm-color-emphasis-700)",
                marginBottom: "16px",
              }}
            >
              With over 5+ years of experience in software engineering, I specialize in building 
              scalable web applications and systems architecture. My expertise spans across frontend 
              technologies like React, TypeScript, and modern frameworks, as well as backend development 
              with Node.js, Python, and cloud infrastructure.
            </p>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.8",
                color: "var(--ifm-color-emphasis-700)",
                marginBottom: "16px",
              }}
            >
              I'm passionate about creating intuitive user interfaces, optimizing performance, and 
              implementing best practices in software development. I believe in writing clean, 
              maintainable code and fostering collaborative team environments.
            </p>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.8",
                color: "var(--ifm-color-emphasis-700)",
              }}
            >
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge through technical writing and mentoring.
            </p>
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
              {[
                {
                  title: "Frontend Development",
                  description: "Building responsive, performant web applications with React, TypeScript, and modern CSS",
                },
                {
                  title: "Backend Development",
                  description: "Designing and implementing scalable APIs, microservices, and server-side logic",
                },
                {
                  title: "System Design",
                  description: "Architecting robust, scalable systems with focus on performance and reliability",
                },
                {
                  title: "DevOps & Cloud",
                  description: "Managing CI/CD pipelines, containerization, and cloud infrastructure deployment",
                },
              ].map((item, index) => (
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

