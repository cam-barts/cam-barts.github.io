import { QuartzConfig } from "./quartz/cfg";
import * as Plugin from "./quartz/plugins";

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Cam's Digital Garden",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "cam-barts.github.io",
    ignorePatterns: ["private", "templates", ".obsidian", "_meta"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      // Observatory / Night Market identity. Header = Space Grotesk (the SB
      // Observatory display face), body = Atkinson Hyperlegible (Cam's brand
      // legible serif-less body). Code = JetBrains Mono is the Google-hosted
      // fallback; custom.scss layers Monaspace Argon (the live SB code font,
      // not on Google Fonts) on top via @font-face from jsDelivr.
      typography: {
        header: { name: "Space Grotesk", weights: [400, 500, 600, 700] },
        body: { name: "Atkinson Hyperlegible", weights: [400, 700] },
        code: "JetBrains Mono",
      },
      colors: {
        // Light mode kept available (theme toggle) but warm-tinted to stay on
        // brand. Dark is the primary identity.
        lightMode: {
          light: "#faf8f6",
          lightgray: "#e7e2db",
          gray: "#9a9488",
          darkgray: "#3b3b46",
          dark: "#1a1b26",
          secondary: "#1f6f8f", // cyan-blue links (readable on light)
          tertiary: "#d98200", // orange accent / hover
          highlight: "rgba(125, 207, 255, 0.15)",
          textHighlight: "#ffaa0044",
        },
        // Dark = Observatory (Tokyo Night derived). canvas #07090d, txt
        // #c0caf5, cyan links #7dcfff, orange #ffaa00 accent.
        darkMode: {
          light: "#07090d", // canvas / page background
          lightgray: "#2a2e42", // hairlines / borders
          gray: "#565f89", // muted / faint text
          darkgray: "#c0caf5", // body text
          dark: "#c0caf5", // headings / strong (hue-coded in custom.scss)
          secondary: "#7dcfff", // links (cyan — matches SB link-color)
          tertiary: "#ffaa00", // accent / link-hover (Observatory orange)
          highlight: "rgba(125, 207, 255, 0.08)",
          textHighlight: "rgba(255, 13, 138, 0.25)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "tokyo-night",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
        rssFullHtml: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
};

export default config;
