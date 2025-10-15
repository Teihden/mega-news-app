import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  root: path.resolve(__dirname, "src/app"),
  publicDir: path.resolve(__dirname, "public"),
  build: {
    outDir: path.resolve(__dirname, "build"),
    emptyOutDir: true,
  },
  plugins: [
    react({
      babel: {
        plugins: [ [ "babel-plugin-react-compiler" ] ],
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
        description: "Mega News is a modern platform with up—to-date news, analytics, and personalized recommendations",
        theme_color: "fff",
        background_color: "#fc4308",
        display: "standalone",
        scope: "/",
        start_url: "/",
        icons: [
          {
            "src": "/favicons/pwa-192x192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "any"
          },
          {
            "src": "/favicons/pwa-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "any"
          },
          {
            "src": "/favicons/pwa-maskable-192x192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "/favicons/pwa-maskable-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "maskable"
          }
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@public": path.resolve(__dirname, "public"),
      "@app": path.resolve(__dirname, "src/app"),
      "@entities": path.resolve(__dirname, "src/entities"),
      "@features": path.resolve(__dirname, "src/features"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@shared": path.resolve(__dirname, "src/shared"),
      "@widgets": path.resolve(__dirname, "src/widgets"),
    },
  },
  server: {
    port: 5173,
    open: true,
  },
});
