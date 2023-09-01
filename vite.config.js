import { defineConfig } from "vite";
import million from "million/compiler";

export default defineConfig({
  plugins: [million.vite({ mode: "preact" })],
  build: {
    minify: true,
    outDir: "./dist/static/public",
  },
});
