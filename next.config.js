const webpack = require('webpack')
const dotenv = require('dotenv')
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const withFonts = require('nextjs-fonts')
const withImages = require('next-images')
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

dotenv.config({ path: '.env.next' })

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
      compress: isProd,
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

configs = withFonts({
  ...configs,
  ...withCSS({
    webpack: (config, { isServer }) => {
      const configuration = { ...config }

      if (isServer) {
        const antStyles = /antd\/.*?\/style\/css.*?/
        const origExternals = [...configuration.externals]

        configuration.externals = [
          (context, request, callback) => {
            if (request.match(antStyles)) return callback()

            if (typeof origExternals[0] === 'function') {
              origExternals[0](context, request, callback)
            } else {
              callback()
            }
          },
          ...(typeof origExternals[0] === 'function' ? [] : origExternals),
        ]

        configuration.module.rules.unshift({
          test: antStyles,
          use: 'null-loader',
        })
      }

      configuration.plugins.push(
        new webpack.optimize.LimitChunkCountPlugin({
          maxChunks: 1,
        })
      )

      configuration.optimization.minimizer.push(new OptimizeCssAssetsPlugin({}))

      return configuration
    },
  }),
})

module.exports = withSass(withImages(configs))
