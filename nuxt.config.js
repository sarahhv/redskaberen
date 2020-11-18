const postcssImport = require('postcss-import');
const postcssCustomMedia = require('postcss-custom-media');
const postcssReporter = require('postcss-reporter');
const postcssNested = require('postcss-nested');
const postcssCalc = require('postcss-calc');
const postcssCustomProperties = require('postcss-custom-properties');

export default {
  target: 'server',
  head: {
    htmlAttrs: {
      lang: 'da',
    },
    title: 'redskaberen',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/gymnast.png' }],
  },
  css: [{ src: '~assets/css/_base/_base.css' }, { src: '~assets/css/_base/_mediaqueries.css' }],
  plugins: [],
  components: true,
  buildModules: [],
  modules: ['@nuxtjs/axios'],
  axios: {},
  build: {
    postcss: {
      plugins: [
        postcssImport(),
        postcssNested(),
        postcssCalc(),
        postcssCustomMedia({
          importFrom: 'assets/css/_base/_mediaqueries.css',
        }),
        postcssReporter({
          clearReportedMessages: true,
        }),
        postcssCustomProperties({
          importFrom: 'assets/css/_base/_variables.css',
          preserve: false,
        }),
      ],
    },
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
