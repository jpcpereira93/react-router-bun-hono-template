import react from "@vitejs/plugin-react";
import { loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    pool: "vmForks",
    clearMocks: true,
    environment: "happy-dom",
    env: loadEnv("test", process.cwd(), ""),
    globals: true,
    setupFiles: ["./test/setup-test-env.ts"],
    silent: true,
    watch: false,
  },
});
