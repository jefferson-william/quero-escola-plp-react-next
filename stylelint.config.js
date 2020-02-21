module.exports = {
  extends: ['stylelint-config-recommended-scss'],
  ignoreFiles: ['node_modules/**', 'build/**', 'dist/**', '.next/**'],
  rules: {
    'string-quotes': 'single',
  },
}
