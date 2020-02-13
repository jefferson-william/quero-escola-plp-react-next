const { override, useBabelRc, addBabelPlugin } = require('customize-cra')
const rewireReactHotLoader = require('react-app-rewire-hot-loader')

module.exports = override(
  useBabelRc(),
  addBabelPlugin(['babel-plugin-root-import', { rootPathSuffix: 'src' }]),
  (config, env) => {
    if (env === 'development') {
      config.resolve.alias['react-dom'] = '@hot-loader/react-dom'
    }

    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    })

    config = rewireReactHotLoader(config, env)

    return config
  }
)
