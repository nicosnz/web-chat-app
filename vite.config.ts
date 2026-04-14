// vite.config.ts
// @ts-ignore
import handlebars from 'vite-plugin-handlebars';
export default {
  plugins: [
    handlebars({
      partialDirectory: './src/partials',
      context: {
        siteName: 'Chat App',
        year: 2026
      }
    })
  ]
};