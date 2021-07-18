export default {

  publicRuntimeConfig: {
    algoliaAppId: process.env.ALGOLIA_APP_ID,
    algoliaApiKey: process.env.ALGOLIA_API_KEY,
    algoliaIndexName: process.env.ALGOLIA_INDEX_NAME,
  },

  head: {
    title: 'ab-nuxt-v2',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  serverMiddleware: [],

  css: [
    '~/assets/fonts/feather/style.css',
    'izitoast/dist/css/iziToast.css',
  ],

  plugins: [
    { src: '~/plugins/Tailwind.js', ssr: true },
    { src: '~/plugins/Toast.js', ssr: false },
    { src: '~/plugins/Axios.js', ssr: true },
    { src: '~/plugins/ApiErrorResponse.js', ssr: true },
    { src: '~/plugins/ScreenSize.js', ssr: true },
    { src: '~/plugins/Sidebar.js', ssr: true },
    { src: '~/plugins/Image.js', ssr: true }
  ],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],

  axios: {
    baseURL: process.env.BASE_API_URL || 'http://localhost/api',
    progress: false,
  },

  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  build: {
  }
}
