module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-standard-vue/scss',
    'stylelint-config-prettier-scss',
    'stylelint-config-recess-order'
  ],
  overrides: [
    {
      files: ['**/*.(scss|css|vue|html)'],
      customSyntax: 'postcss-scss'
    },
    {
      files: ['**/.*.(html|vue)'],
      customSyntax: 'postcss-html'
    }
  ],
  ignoreFiles: [
    '**/*.js',
    '**/*.jsx',
    '**/*.ts',
    '**/*.tsx',
    '**/*.json',
    '**/*.md',
    '**/*.yaml'
  ],
  rules: {
    'value-keyword-case': 'lower',
    'no-descending-specificity': true,
    'function-url-quotes': 'always',
    'no-empty-source': true,
    'selector-class-pattern': 'string',
    'property-no-unknown': true,
    'value-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    'selector-pseudo-class-no-unknown': true
  }
}
