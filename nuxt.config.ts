// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxt/image-edge',
  ],
  eslint: {
    lintOnStart: false,
  },
  app: {
    baseURL: '/rolinfolio/',
    head: {
      title: 'RolinfoliO',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
    pageTransition: {
      name: 'fade',
      mode: 'out-in',
    },
  },
})
