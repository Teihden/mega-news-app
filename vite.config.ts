import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { VitePWA } from "vite-plugin-pwa";
import ViteSvgr from "vite-plugin-svgr";
import ViteInspect from "vite-plugin-inspect";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { browserslistToTargets } from "lightningcss";
import browserslist from "browserslist";
import { analyzer as ViteBundleAnalyzer } from "vite-bundle-analyzer";
import { compression as ViteCompression } from "vite-plugin-compression2";
import { createHtmlPlugin as ViteHtml } from "vite-plugin-html";
import ViteChecker from "vite-plugin-checker";
import type { TNullValue } from "@shared/types";

/**
 * Joins the provided path segments and returns an absolute path.
 * @param segments - Path segments that should be resolved from the current directory.
 * @returns Absolute path built from the provided segments.
 */
const resolvePath = (...segments: string[]) => resolve(__dirname, ...segments);

const MANUAL_CHUNK_RULES: Array<{ chunkName: string; patterns: string[] }> = [
  {
    chunkName: "router-vendor",
    patterns: [ "react-router" ],
  },
  {
    chunkName: "react-ecosystem-vendor",
    patterns: [ "react-helmet-async", "react-error-boundary", "react-hot-toast" ],
  },
  {
    chunkName: "react-vendor",
    patterns: [ "react", "scheduler" ],
  },
  {
    chunkName: "style-vendor",
    patterns: [ "styled-components", "styled-breakpoints" ],
  },
  {
    chunkName: "i18n-vendor",
    patterns: [
      "i18next",
      "react-i18next",
      "i18next-browser-languagedetector",
      "i18next-chained-backend",
      "i18next-localstorage-backend",
      "i18next-resources-to-backend",
    ],
  },
  {
    chunkName: "state-vendor",
    patterns: [ "@reduxjs", "react-redux", "zustand" ],
  },
  {
    chunkName: "swiper-vendor",
    patterns: [ "swiper" ],
  },
  {
    chunkName: "forms-vendor",
    patterns: [ "formik", "yup" ],
  },
  {
    chunkName: "layout-vendor",
    patterns: [ "@bedrock-layout" ],
  },
];

/**
 * Returns a stable manual chunk name for third-party modules.
 * @param id - Resolved module id from Rollup.
 * @returns Manual chunk name for matching dependencies.
 */
const getManualChunk = (id: string): string | TNullValue => {
  if (!id.includes("node_modules")) {
    return null;
  }

  const rule = MANUAL_CHUNK_RULES.find(({ patterns }) => {
    return patterns.some((pattern) => id.includes(pattern));
  });
  return rule?.chunkName;
};

export default defineConfig(({ mode }) => {
  const isDev = mode === "development";
  const isProd = mode === "production";

  return {
    root: resolvePath("src/app"),
    publicDir: resolvePath("public"),
    css: {
      transformer: "lightningcss",
      devSourcemap: true,
      lightningcss: {
        targets: browserslistToTargets(browserslist()),
        minify: isProd,
        sourceMap: isDev,
        analyzeDependencies: true,
      },
    },
    build: {
      outDir: resolvePath("build"),
      emptyOutDir: true,
      sourcemap: false,
      cssMinify: "lightningcss",
      rollupOptions: {
        output: {
          manualChunks: getManualChunk,
        },
      },
    },
    plugins: [
      react({
        babel: {
          plugins: [
            [
              "babel-plugin-react-compiler",
            ],
            [
              "babel-plugin-styled-components",
              {
                ssr: false,
                displayName: isDev,
                fileName: isDev,
                meaninglessFileNames: [ "index", "styles" ],
                minify: isProd,
                transpileTemplateLiterals: isProd,
                pure: isProd,
              },
            ],
          ],
        },
      }),
      ViteHtml({
        minify: true,
      }),
      VitePWA({
        registerType: "autoUpdate",
        devOptions: {
          enabled: false,
          // eslint-disable-next-line jsdoc/require-jsdoc
          resolveTempFolder: () => resolvePath("node_modules/.vite/pwa"),
        },
        includeAssets: [
          "favicon.ico",
          "favicons/favicon.svg",
          "favicons/apple-touch-icon.png",
          "favicons/mask-icon.svg",
          "fonts/*.woff2",
        ],
        manifest: {
          name: "Mega news",
          short_name: "Mega news",
          description: "Mega News is a modern platform with up-to-date news, analytics, and personalized recommendations",
          theme_color: "#fff",
          background_color: "#fc4308",
          display: "standalone",
          orientation: "portrait-primary",
          scope: "/",
          start_url: "/",
          icons: [
            {
              src: "/favicons/pwa-192x192.png",
              sizes: "192x192",
              type: "image/png",
              purpose: "any",
            },
            {
              src: "/favicons/pwa-512x512.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "any",
            },
            {
              src: "/favicons/pwa-maskable-192x192.png",
              sizes: "192x192",
              type: "image/png",
              purpose: "maskable",
            },
            {
              src: "/favicons/pwa-maskable-512x512.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "maskable",
            },
          ],
        },
      }),
      ViteSvgr({
        svgrOptions: {
          plugins: [ "@svgr/plugin-svgo", "@svgr/plugin-jsx" ],
          icon: true,
          titleProp: true,
          svgo: true,
        },
        include: "**/*.svg?react",
      }),
      ViteImageOptimizer({
        exclude: /\.(svg?react)$/i,
        includePublic: true,
        ansiColors: true,
        logStats: true,
        cache: true,
        cacheLocation: "node_modules/.vite/image-optimizer",
        jpg: {
          quality: 70,
          progressive: true,
          mozjpeg: true,
        },
        jpeg: {
          quality: 70,
          progressive: true,
          mozjpeg: true,
        },
        png: {
          quality: 85,
          compressionLevel: 9,
          palette: true,
        },
        webp: {
          quality: 70,
        },
        avif: {
          quality: 70,
        },
        gif: {},
        tiff: {
          quality: 70,
        },
      }),
      ViteInspect({
        dev: false,
        build: false,
        silent: false,
        open: false,
        removeVersionQuery: true,
      }),
      ViteBundleAnalyzer({
        openAnalyzer: true,
        enabled: !(process.env.RENDER ?? false),
        exclude: /\.(jpe?g|png|gif|tiff|webp|svg|avif|webmanifest|html)$/i,
        analyzerPort: "auto",
      }),
      ViteCompression({
        algorithms: [ "zstd", "br" ],
        threshold: 10240,
        deleteOriginalAssets: false,
        skipIfLargerOrEqual: true,
      }),
      ViteChecker({
        typescript: true,
        eslint: false,
        stylelint: false,
      }),
    ],
    resolve: {
      alias: {
        "@public": resolvePath("public"),
        "@app": resolvePath("src/app"),
        "@entities": resolvePath("src/entities"),
        "@features": resolvePath("src/features"),
        "@pages": resolvePath("src/pages"),
        "@shared": resolvePath("src/shared"),
        "@widgets": resolvePath("src/widgets"),
      },
    },
    server: {
      port: 5173,
      strictPort: true,
      host: true,
      open: "/",
    },
    preview: {
      port: 4173,
      strictPort: true,
      open: "/",
    },
  };
});
