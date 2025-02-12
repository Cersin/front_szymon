// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    'normalize.css/normalize.css',
    '~/assets/scss/helpers.scss',
    '~/assets/scss/main.scss',
    '~/assets/scss/fonts.scss',
  ],
  modules: ['@nuxt/eslint', '@nuxtjs/i18n', '@nuxt/fonts', '@nuxt/icon'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/_variables.scss" as *;',
        },
      },
    },
  },
  icon: {
    serverBundle: {
      collections: ['uil'],
    },
  },
  i18n: {
    vueI18n: './i18n.config.ts',
    strategy: 'prefix_except_default',
    multiDomainLocales: true,
    differentDomains: true,
    locales: [
      {
        code: 'pl',
        domain: 'localhost:3000',
      },
      {
        code: 'en',
        domain: 'localhost:3000',
      },
    ],
  },
});
