// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'
// import path from 'path'
// // import * as path from 'path';

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(),tailwindcss()],
//   assetsInclude: ['**/*.JPG'],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src'),
//     },
//   },
// })


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  assetsInclude: ['**/*.JPG'],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    include: [
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-slot'
    ],
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/],
    }
  },
  server: {
    proxy: {
      '/api/images': 'http://localhost:5173'
    }
  }
});


