// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in' // default
    }
  },
  pages: true, // Pastikan ini ada
  modules: ['@nuxt/fonts', '@nuxt/icon', '@nuxtjs/tailwindcss']
})