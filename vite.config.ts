import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { VitePWA } from "vite-plugin-pwa";
import ViteSvgr from "vite-plugin-svgr";
import ViteInspect from "vite-plugin-inspect";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

/**
 * Функция resolvePath объединяет указанные сегменты пути и возвращает абсолютный путь.
 * @param segments - Массив строк, представляющих части пути, которые требуется объединить.
 * @returns Абсолютный путь, сформированный из переданных сегментов, относительно текущей директории.
 */
const resolvePath = (...segments: string[]) => resolve(__dirname, ...segments);

export default defineConfig(({ mode }) => {
  const isDev = mode === "development";
  const isProd = mode === "production";

  return {
    root: resolvePath("src/app"),
    publicDir: resolvePath("public"),
    build: {
      outDir: resolvePath("build"),
      emptyOutDir: true,
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
      VitePWA({
        registerType: "autoUpdate",
        includeAssets: [
          "favicon.ico",
          "favicons/favicon.svg",
          "favicons/apple-touch-icon.png",
          "favicons/mask-icon.svg",
        ],
        manifest: {
          name: "Mega news",
          short_name: "Mega news",
          description:
            "Mega News is a modern platform with up—to-date news, analytics, and personalized recommendations",
          theme_color: "#fff",
          background_color: "#fc4308",
          display: "standalone",
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
        logStats: true,
        cache: true,
        cacheLocation: "node_modules/.vite/image-optimizer",
        jpeg: {
          quality: 75,
          progressive: true,
          mozjpeg: true,
        },
        png: {
          quality: 75,
          compressionLevel: 7,
          palette: true,
        },
        webp: {
          quality: 70,
        },
        avif: {
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
      host: true,
      open: "/",
    },
  };
});
