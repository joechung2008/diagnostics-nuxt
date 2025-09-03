// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  css: ["~/assets/css/global.css"],
  devtools: {
    enabled: true,
  },
  modules: [
    "@nuxt/eslint",
    "@nuxt/ui",
    "@nuxt/test-utils/module",
    "@nuxt/image",
    "@nuxt/scripts",
  ],
  typescript: {
    strict: true,
    typeCheck: true,
  },
});
