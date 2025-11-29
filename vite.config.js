import { defineConfig } from 'vite';
export default defineConfig({
  base: './',
  define: {
    'import.meta.env.VITE_GEMINI_API_KEY': JSON.stringify(process.env.VITE_GEMINI_API_KEY)
  }
});
