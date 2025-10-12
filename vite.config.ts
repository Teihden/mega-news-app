import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

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
});
