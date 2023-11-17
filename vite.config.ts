import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@assets": path.resolve(__dirname, "./src/assets"),
            "@components": path.resolve(__dirname, "./src/components"),
            "@store": path.resolve(__dirname, "./src/store"),
            "@slices": path.resolve(__dirname, "./src/store/slices"),
            "@styles": path.resolve(__dirname, "./src/styles"),
        },
    },
    plugins: [react()],
    build: {
        outDir: "./build",
        cssCodeSplit: false,
        rollupOptions: {
            input: {
                app: "./src/index.html",
            },
        },
    },
    server: {
        open: "./src/index.html",
    },
});
