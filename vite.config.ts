import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import unused from 'rollup-plugin-unused';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html',
      },
      output: {
        inlineDynamicImports: false,
      },
      plugins: [unused({ include: ['src/**/*.tsx', 'src/**/*.ts'] })],
    },
  },
});
