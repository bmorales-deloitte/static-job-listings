export default defineNuxtConfig({
  css: ['~/assets/main.css'],

  modules: [
    // pinia plugin
    '@pinia/nuxt'
  ],

  imports: {
    dirs: ['./stores'],
  },

  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  },
  vite: {
    server: {
        fs: {
            allow: ["/Users/bmorales/Documents/workspace"]
        }
    }
  }
})
