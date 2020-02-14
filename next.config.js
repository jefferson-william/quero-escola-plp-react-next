const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const withFonts = require('next-fonts')
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const isProd = process.env.NODE_ENV === 'production'

let configs = withBundleAnalyzer((phase, { defaultConfig }) => {
  let config = { ...defaultConfig }

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    config = {
      ...defaultConfig,
      env: {
        customKey: 'my-custom-key',
      },
    }
  }

  return {
    ...config,
    ...{
      distDir: 'dist',
      poweredByHeader: false,
      compress: isProd && true,
      pageExtensions: ['jsx', 'js', 'ts', 'tsx'],
      assetPrefix: isProd ? 'https://cdn.mydomain.com' : '',
      serverRuntimeConfig: {
        // Will only be available on the server side
        mySecret: 'secret',
        secondSecret: process.env.SECOND_SECRET, // Pass through env variables
      },
      publicRuntimeConfig: {
        // Will be available on both server and client
        staticFolder: '/static',
      },
      exportPathMap: async () => {
        return {
          '/about': { page: '/about' },
        }
      },
    },
  }
})

configs = withFonts(configs)

configs = withCSS(configs)

configs = withSass(configs)

module.exports = configs
