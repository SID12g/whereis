import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import { UserConfigExport, ConfigEnv } from "vite";

// https://vitejs.dev/config/

export default ({ mode }: ConfigEnv): UserConfigExport => {
  const env = loadEnv(mode, process.cwd(), "");

  return defineConfig({
    plugins: [react()],
    server: {
      proxy: {
        "/api": {
          target: env.VITE_PROXY,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  });
};
