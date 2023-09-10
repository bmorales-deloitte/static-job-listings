export default defineNuxtConfig({
  css: ["@/assets/scss/global.scss"],

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
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_vars.scss" as *;',
        },
      },
    },
  },
  runtimeConfig: {
    mongoUrl: process.env.MONGO_URL
  },
  nitro: {
    plugins: ["~/server/index.ts"],
  }
});