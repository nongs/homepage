import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    // Svelte 패키지의 browser 조건(클라이언트 엔트리)을 우선하도록 강제
    conditions: ['browser'],
  },
  plugins: [svelte()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    server: {
      deps: {
        inline: ['svelte', '@testing-library/svelte'],
      },
    },
  },
})
