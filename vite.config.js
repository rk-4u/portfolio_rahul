import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base : "https://random-404error.github.io/portfolio_rahul",
  plugins: [react()],
});
