import { defineConfig } from 'cypress';

export default defineConfig({
  viewportWidth: 1280,
  viewportHeight: 720,
  video: false,
  e2e: {
    baseUrl: 'https://practice.qabrains.com/ecommerce',

    setupNodeEvents(on, config) {
      return config;
    },
  },
});
