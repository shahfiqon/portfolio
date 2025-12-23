import React from "react";
import Layout from "@theme/Layout";
import { motion } from "framer-motion";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiCalendar,
  FiMapPin,
} from "react-icons/fi";

const contactMethods = [
  {
    icon: <FiMail size={24} />,
    title: "Email",
    value: "phoenix@example.com",
    link: "mailto:phoenix@example.com",
    color: "#3b82f6",
  },
  {
    icon: <FiGithub size={24} />,
    title: "GitHub",
    value: "@shahfiqon",
    link: "https://github.com/shahfiqon",
    color: "#333",
  },
  {
    icon: <FiLinkedin size={24} />,
    title: "LinkedIn",
    value: "/in/phoenix",
    link: "https://linkedin.com/in/phoenix",
    color: "#0077b5",
  },
  {
    icon: <FiTwitter size={24} />,
    title: "Twitter",
    value: "@phoenix",
    link: "https://twitter.com/phoenix",
    color: "#1da1f2",
  },
];

export default function Contact() {
  return (
    <Layout
      title="Contact"
      description="Get in touch - Let's discuss your next project or opportunity"
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
            Let's Connect
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "var(--ifm-color-emphasis-700)",
              maxWidth: "600px",
              margin: "0 auto 24px",
              lineHeight: "1.6",
            }}
          >
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 20px",
              backgroundColor: "var(--ifm-color-success-lightest)",
              color: "var(--ifm-color-success-dark)",
              borderRadius: "20px",
              fontSize: "14px",
              fontWeight: "600",
              border: "1px solid var(--ifm-color-success-light)",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                backgroundColor: "var(--ifm-color-success)",
                borderRadius: "50%",
                animation: "pulse 2s infinite",
              }}
            />
            Available for opportunities
          </motion.div>
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "24px",
            marginBottom: "60px",
          }}
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "32px 24px",
                backgroundColor: "var(--ifm-card-background-color)",
                borderRadius: "16px",
                border: "1px solid var(--ifm-color-emphasis-200)",
                boxShadow: "var(--ifm-global-shadow-md)",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: `${method.color}15`,
                  color: method.color,
                  borderRadius: "16px",
                  marginBottom: "16px",
                }}
              >
                {method.icon}
              </div>
              <h3
                style={{
                  margin: "0 0 8px 0",
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "var(--ifm-font-color-base)",
                }}
              >
                {method.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: "14px",
                  color: "var(--ifm-color-emphasis-700)",
                  fontFamily: "monospace",
                }}
              >
                {method.value}
              </p>
            </motion.a>
          ))}
        </motion.div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {/* Location */}
          <div
            style={{
              padding: "32px",
              backgroundColor: "var(--ifm-card-background-color)",
              borderRadius: "16px",
              border: "1px solid var(--ifm-color-emphasis-200)",
              boxShadow: "var(--ifm-global-shadow-lw)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "var(--ifm-color-primary-lightest)",
                  color: "var(--ifm-color-primary)",
                  borderRadius: "12px",
                }}
              >
                <FiMapPin size={20} />
              </div>
              <h3
                style={{
                  margin: 0,
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "var(--ifm-font-color-base)",
                }}
              >
                Location
              </h3>
            </div>
            <p
              style={{
                margin: 0,
                fontSize: "15px",
                color: "var(--ifm-color-emphasis-700)",
                lineHeight: "1.6",
              }}
            >
              Based in [Your City], open to remote opportunities worldwide.
            </p>
          </div>

          {/* Schedule */}
          <div
            style={{
              padding: "32px",
              backgroundColor: "var(--ifm-card-background-color)",
              borderRadius: "16px",
              border: "1px solid var(--ifm-color-emphasis-200)",
              boxShadow: "var(--ifm-global-shadow-lw)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "var(--ifm-color-primary-lightest)",
                  color: "var(--ifm-color-primary)",
                  borderRadius: "12px",
                }}
              >
                <FiCalendar size={20} />
              </div>
              <h3
                style={{
                  margin: 0,
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "var(--ifm-font-color-base)",
                }}
              >
                Schedule a Call
              </h3>
            </div>
            <p
              style={{
                margin: "0 0 16px 0",
                fontSize: "15px",
                color: "var(--ifm-color-emphasis-700)",
                lineHeight: "1.6",
              }}
            >
              Book a time that works best for you to discuss your project or
              opportunity.
            </p>
            <a
              href="https://calendly.com/phoenix"
              target="_blank"
              rel="noopener noreferrer"
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
            >
              <FiCalendar size={16} />
              Book a Meeting
            </a>
          </div>
        </motion.div>

        {/* Response Time Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            marginTop: "48px",
            padding: "24px",
            backgroundColor: "var(--ifm-color-emphasis-100)",
            borderRadius: "12px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: "14px",
              color: "var(--ifm-color-emphasis-700)",
            }}
          >
            📬 I typically respond within <strong>24-48 hours</strong>. For
            urgent matters, please mention "urgent" in your subject line.
          </p>
        </motion.div>
      </main>

      <style>
        {`
          @keyframes pulse {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.5;
            }
          }
        `}
      </style>
    </Layout>
  );
}


