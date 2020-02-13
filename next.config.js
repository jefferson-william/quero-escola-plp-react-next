const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withBundleAnalyzer((phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    defaultConfig = Object.assign({}, defaultConfig, {
      env: {
        customKey: 'my-custom-key',
      },
    })
  }

  return Object.assign({}, defaultConfig, {
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
    exportPathMap: async (defaultPathMap, { dev, dir, outDir, distDir, buildId }) => {
      return {
        '/about': { page: '/about' },
      }
    },
  })
})
