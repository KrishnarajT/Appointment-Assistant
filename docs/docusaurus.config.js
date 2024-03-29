const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Appointment Assistant",
  tagline: "Make Appointments, the right way.",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/Appointment-Assistant/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Krishnaraj and Team", // Usually your GitHub org/user name.
  projectName: "Appointment Assistant", // Usually your repo name.
  // i18n: {
  // 	defaultLocale: "en",
  // 	locales: ["en", "fr", "hi"],
  // },

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/facebook/docusaurus/edit/main/website/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Appointment Assistant",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            to: "/docs/how_to_use/intro",
            label: "Tutorial",
            position: "left",
          },
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Docs",
          },
          {
            href: "https://github.com/KrishnarajT/Appointment-Assistant",
            label: "GitHub",
            position: "right",
          },
          // {
          //   type: "localeDropdown",
          //   position: "right",
          // },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Appointment Assistant, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};
