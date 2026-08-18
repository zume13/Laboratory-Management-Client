import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5173,
    proxy: {
      // Forwards /api/* to the Laboratory-Management-API during local dev,
      // so the frontend never needs to hardcode https://localhost:7260 in code.
      "/api": {
        target: "https://localhost:7260",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
