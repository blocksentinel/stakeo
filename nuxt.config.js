export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'server',

  loading: {
    color: '#e2fca4',
    failedColor: '#fca6a6',
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Switcheo TradeHub Staking Calculator',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Blockchain analytics and staking tools for Switcheo TradeHub.',
      },
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/site.webmanifest' },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/scss/main.scss',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/fontawesome.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-i18n',
  ],

  buefy: {
    css: false,
    defaultIconPack: 'fas',
    defaultIconComponent: 'font-awesome-icon',
  },

  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en-US.js',
      },
    ],
    defaultLocale: 'en',
    strategy: 'no_prefix',
    lazy: true,
    langDir: 'lang/',
    vueI18n: {
      numberFormats: {
        en: {
          currency: {
            style: 'currency',
            currency: 'USD',
          },
          currencyToken: {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 4,
          },
          volume: {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          },
          crypto: {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          },
          compact: {
            minimumFractionDigits: 0,
            maximumFractionDigits: 1,
            notation: 'compact',
            compactDisplay: 'short',
          },
          percent: {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          },
        },
      },
    },
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    proxy: true,
    // Used as fallback if no runtime config is provided
    baseURL: 'http://localhost:3000',
  },

  proxy: {
    '/api/': process.env.API_URL || 'https://api.stakeo.com',
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    hotMiddleware: {
      client: {
        overlay: false,
      },
    },
  },

  publicRuntimeConfig: {
    appName: process.env.npm_package_name,
    appVersion: process.env.npm_package_version,
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL,
    },
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL,
    },
  },
}
