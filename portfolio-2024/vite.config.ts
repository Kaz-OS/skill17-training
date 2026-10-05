import { defineConfig } from "vite";

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import fulgur from "fulgur/vite";

export default defineConfig({
  base: process.env.GITHUB_ACTIONS
    ? "/skill17-training/portfolio-2024/"
    : "/",
  plugins: [fulgur(), react(), tailwindcss()],
});
