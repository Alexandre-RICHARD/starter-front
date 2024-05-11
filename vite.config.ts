import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    server: { port: parseInt(env.VITE_LOCAL_PORT, 10) },
    resolve: {
      alias: {
        "@src": path.resolve(__dirname, "src"),
        "@api": path.resolve(__dirname, "src/api"),
        "@assets": path.resolve(__dirname, "src/assets"),
        "@component": path.resolve(__dirname, "src/component"),
        "@enum": path.resolve(__dirname, "src/enum"),
        "@helper": path.resolve(__dirname, "src/helper"),
        "@store": path.resolve(__dirname, "src/store"),
        "@style": path.resolve(__dirname, "src/style"),
        "@translation": path.resolve(__dirname, "src/assets/translation"),
        "@types": path.resolve(__dirname, "src/types"),
      },
    },
    plugins: [react()],
    build: {
      assetsDir: "./",
      cssCodeSplit: false,
      manifest: true,
      outDir: "./build",
      rollupOptions: { input: { app: "./index.html" } },
    },
  };
});
