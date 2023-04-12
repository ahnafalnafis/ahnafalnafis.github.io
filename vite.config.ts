import { defineConfig } from "vite";

// React:
import react from "@vitejs/plugin-react-swc";

// PostCSS:
import autoprefixer from "autoprefixer";
import cssnanoPlugin from "cssnano";
import pluginOptions from "postcss-preset-env";
import atImport from "postcss-import";
import precss from "precss";

export default defineConfig({
  server: {
    port: 3000,
  },
  build: {
    outDir: "public",
  },
  plugins: [react()],

  css: {
    postcss: {
      plugins: [
        autoprefixer,
        cssnanoPlugin,
        pluginOptions({ stage: 1 }),
        atImport,
        precss,
      ],
    },
  },
});
