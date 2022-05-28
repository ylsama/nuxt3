import { defineNuxtConfig } from 'nuxt';
console.log('ENV', process.env.NODE_ENV);
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  env: {
    apiUrl: process.env.API_BASE_URL,
    baseUrl: process.env.BASE_URL,
    isDemo: process.env.IS_DEMO,
    apiKey: process.env.API_KEY,
  },
  css: ['@/assets/css/main.css'],
  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js'),
    },
  },
  head: {
    title: 'OiZ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
  },
});
