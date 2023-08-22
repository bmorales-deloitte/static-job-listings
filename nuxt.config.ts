export default defineNuxtConfig({
  css: ['~/assets/main.css'],

  modules: [
    // pinia plugin
    '@pinia/nuxt',
    '@vee-validate/nuxt'
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
  },
  runtimeConfig: {
    mongoUrl: process.env.MONGO_URL
  },
  nitro: {
    plugins: ["~/server/index.ts"],
  }
});