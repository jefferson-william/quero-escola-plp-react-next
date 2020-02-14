module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
    '@zeit/next-typescript/babel',
    'next/babel',
  ],
  plugins: [
    '@babel/plugin-transform-react-jsx',
    '@babel/plugin-proposal-optional-chaining',
    'import-graphql',
    'graphql-tag',
    'inline-react-svg',
    'react-hot-loader/babel',
    ['styled-jsx/babel', { optimizeForSpeed: true }],
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '~': './src',
          '@': './public',
        },
      },
    ],
  ],
}
