import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import less from 'less';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    less({
      javascriptEnabled: true,
    }),
  ],
  server: {
    host: '0.0.0.0',
    port: 9000,
    open: true,
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {},
        javascriptEnabled: true,
      },
    },
  },
});
