import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// 解构path模块里面的resolue方法
import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  server: {
    port: 3000,
  },
});
