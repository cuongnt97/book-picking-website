import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  root: "./src",
  plugins: [],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src", "assets"),
      "@css": path.resolve(__dirname, "src", "css"),
      "@js": path.resolve(__dirname, "src", "js"),
      "@lib": path.resolve(__dirname, "src", "lib"),
      "@utils": path.resolve(__dirname, "src", "utils"),
    },
  },
  build: {
    outDir: path.resolve(__dirname, "dist"),
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "src", "index.html"),
        about: path.resolve(__dirname, "src", "about.html"),
      },
    },
  },
});
