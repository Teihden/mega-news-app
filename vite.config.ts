import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  root: path.resolve(__dirname, "src/app"),
  build: {
    outDir: path.resolve(__dirname, "build"),
    emptyOutDir: true,
  },
  plugins: [
    react({
      babel: {
        plugins: [[ "babel-plugin-react-compiler" ]],
      },
    }),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Mega news",
        short_name: "Mega news",
        theme_color: "fff",
        background_color: "#fc4308",
        display: "standalone",
        scope: "/",
        start_url: "/",
        icons: [
          {
            "src": "/assets/android-icon-36x36.png",
            "sizes": "36x36",
            "type": "image/png",
          },
          {
            "src": "./assets/android-icon-48x48.png",
            "sizes": "48x48",
            "type": "image/png",
          },
          {
            "src": "/assets/android-icon-72x72.png",
            "sizes": "72x72",
            "type": "image/png",
          },
          {
            "src": "/assets/android-icon-96x96.png",
            "sizes": "96x96",
            "type": "image/png",
          },
          {
            "src": "/assets/android-icon-144x144.png",
            "sizes": "144x144",
            "type": "image/png",
          },
          {
            "src": "/assets/android-icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png",
          }
        ]
      }
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
