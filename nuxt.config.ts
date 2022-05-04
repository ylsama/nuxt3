import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['@/assets/css/main.css'],
  modules: ['@nuxt/postcss8', '@nuxtjs/tailwindcss'],
  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js'),
    },
  },
});
