// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Phoenix | Senior Software Engineer",
  tagline: "Building scalable systems and exceptional user experiences",
  favicon: "img/favicon.ico",

  deploymentBranch: "gh-pages",

  // Set the production url of your site here
  url: "https://shahfiqon.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "phoneix", // Usually your GitHub org/user name.
  projectName: "portfolio", // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
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
      image: "img/docusaurus-social-card.jpg",
      metadata: [
        {
          name: "description",
          content:
            "Senior Software Engineer portfolio showcasing experience in frontend, backend, and system design",
        },
        { name: "keywords", content: "software engineer, portfolio, react, typescript, frontend, backend" },
        { property: "og:type", content: "website" },
        { property: "og:title", content: "Phoenix | Senior Software Engineer Portfolio" },
        {
          property: "og:description",
          content: "Building scalable systems and exceptional user experiences",
        },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "Phoenix",
        logo: {
          alt: "Phoenix Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            label: "Home",
            to: "/",
            position: "right",
            activeBaseRegex: "^/$",
          },
          {
            label: "About",
            to: "/about",
            position: "right",
          },
          {
            label: "Experience",
            to: "/experience",
            position: "right",
          },
          {
            label: "Projects",
            to: "/projects",
            position: "right",
          },
          {
            label: "Achievements",
            to: "/blog",
            position: "right",
          },
          {
            type: "html",
            position: "right",
            value: '<a href="/contact" class="resume-button">Resume</a>',
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Navigate",
            items: [
              {
                label: "Home",
                to: "/",
              },
              {
                label: "Projects",
                to: "/projects",
              },
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "Contact",
                to: "/contact",
              },
            ],
          },
          {
            title: "Connect",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/shahfiqon",
              },
              {
                label: "LinkedIn",
                href: "https://linkedin.com/in/phoenix",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/phoenix",
              },
            ],
          },
          {
            title: "Resources",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/shahfiqon",
              },
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Phoenix. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
