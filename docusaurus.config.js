// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";
import portfolioConfig from "./src/config/portfolio.config.ts";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const { siteConfig, navbarItems, footerLinks } = portfolioConfig;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: siteConfig.title,
  tagline: siteConfig.tagline,
  favicon: siteConfig.favicon,

  deploymentBranch: "gh-pages",

  // Set the production url of your site here
  url: siteConfig.url,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: siteConfig.baseUrl,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: siteConfig.organizationName, // Usually your GitHub org/user name.
  projectName: siteConfig.projectName, // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  themes: ["@docusaurus/theme-mermaid"],

  markdown: {
    mermaid: true,
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false, // Disable docs plugin
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          blogTitle: "Technical Blog",
          blogDescription: "Insights on software engineering, architecture, and technology",
          postsPerPage: 10,
          blogSidebarTitle: "Recent posts",
          blogSidebarCount: 5,
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/social-card.svg",
      metadata: siteConfig.metadata,
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        hideOnScroll: true,
        logo: {
          alt: "Phoenix Logo",
          src: "/img/logo.svg",
        },
        items: [
          ...navbarItems,
          {
            type: "html",
            position: "right",
            value: '<a href="/contact" class="resume-button">Resume</a>',
          },
        ],
      },
      footer: {
        style: "dark",
        links: footerLinks,
        copyright: siteConfig.copyright,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
