const path = require('path')
const {
  override,
  useEslintRc,
  enableEslintTypescript,
  addBabelPlugins,
  addBabelPresets,
  removeModuleScopePlugin,
} = require('customize-cra')
const rewireReactHotLoader = require('react-app-rewire-hot-loader')
const aliasImporter = require('node-sass-alias-importer')

module.exports = override(
  useEslintRc(),
  enableEslintTypescript(),
  ...addBabelPresets(
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
    '@zeit/next-typescript/babel',
    'next/babel'
  ),
  ...addBabelPlugins(
    '@babel/plugin-transform-react-jsx',
    '@babel/plugin-proposal-optional-chaining',
    'import-graphql',
    'graphql-tag',
    [
      'babel-plugin-module-resolver',
      {
        alias: {
          '~': './src',
          '@': './public',
        },
      },
    ]
  ),
  (config, env) => {
    const configuration = { ...config }

    removeModuleScopePlugin()(configuration)

    if (env === 'development') {
      configuration.resolve.alias['react-dom'] = '@hot-loader/react-dom'
    }

    configuration.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    })

    configuration.module.rules.push({
      test: /\.(s|a)ss$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'sass-loader',
          options: {
            importer: aliasImporter({
              '~': './src',
              '@': './public',
            }),
          },
        },
      ],
    })

    configuration.resolve.modules = [...configuration.resolve.modules, path.resolve(__dirname, 'public')]

    configuration.resolve.alias = {
      ...configuration.resolve.alias,
      '@': path.resolve(__dirname, 'public'),
    }

    return rewireReactHotLoader(configuration, env)
  }
)
