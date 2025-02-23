import { resolve } from 'node:path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['@testing-library/jest-dom/vitest'],
  },
  resolve: {
    alias: [
      {
        find: /^@\/(.+)/,
        replacement: resolve(__dirname, 'src/$1'),
      },
      {
        find: /^@test\/(.+)/,
        replacement: resolve(__dirname, 'test-context/$1'),
      },
    ],
  },
})
