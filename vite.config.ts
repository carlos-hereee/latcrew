import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "./src"),
      "@context": path.resolve(__dirname, "./src/utils/context"),
      "@axios": path.resolve(__dirname, "./src/utils/axios"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
    },
  },
  plugins: [react()],
});
