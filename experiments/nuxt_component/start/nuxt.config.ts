// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@lttr/nuxt-puleo", "@nuxt/fonts"],
  css: ["~/assets/css/main.css"],
  compatibilityDate: "2025-01-15",
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        class: "is-light",
      },
    },
  },
})
