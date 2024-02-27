# [eslint](https://eslint.org/)

1. install

```sh
npm init @eslint/config
```

2. rules

   - [eslint](https://eslint.org/docs/latest/rules)

   - [vue](https://eslint.vuejs.org/rules/)

   - [ts](https://typescript-eslint.io/rules/)

3. [.eslintignore](./.eslintignore)

```ignore
dist
```

4. [package.json](./package.json)

```json
{
   "scripts": {
      "eslint": "eslint src"
   }
}
```

# [prettier](https://prettier.io/)

1. install

```sh
npm install -D -E prettier
npm install -D eslint-config-prettier
```

2. [.prettierrc.cjs](./.prettierrc.cjs)

```javascript
module.export = {
  singleQuote: true,
  semi: false,
  bracketSpacing: true,
  htmlWhitespaceSensitivity: "ignore",
  endOfLine: "auto",
  trailingComma: "all",
  tabWidth: 2
}

```

3. [.prettierignore](./.prettierignore)

```ignore
**/public
**/dist
```

4. [package.json](./package.json)

```json
{
   "scripts": {
      "format": "prettier --write src"
   }
}
```

# [stylelint](https://stylelint.io/)

1. install

```sh
npm install -D stylelint postcss-html stylelint-config-standard-scss stylelint-config-standard-vue stylelint-config-prettier-scss stylelint-config-recess-order
```

2. [.stylelintrc.cjs](./.stylelintrc.cjs)

   - [rules](https://stylelint.io/user-guide/rules)

```javascript
module.exports = {
    extends: [
        "stylelint-config-standard-scss",
        "stylelint-config-standard-vue/scss",
        "stylelint-config-prettier-scss",
        "stylelint-config-recess-order"
    ],
    overrides: [
        {
            files: [
                '**/*.(scss|css|vue|html)'
            ],
            customSyntax: 'postcss-scss'
        },
        {
            files: [
                '**/.*.(html|vue)'
            ],
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
```

3. [.stylelintignore](./.stylelintignore)

```ignore
node_modules/*
dist/*
public/*
```

4. [package.json](./package.json)

```json
{
    "scripts": {
        "stylelint": "stylelint src/**/*.{css,scss,vue} --cache --fix"
    }
}
```

# [husky](https://typicode.github.io/husky/)

1. install

```sh
npm install -D husky
```

2. init

```sh
npx husky init
```

3. [pre-commit](./.husky/pre-commit)

```sh
npm run format
```

# [commitlint](https://commitlint.js.org/)

1. install

```sh
npm install -D @commitlint/config-conventional @commitlint/cli
```

2. [.commitlintrc.cjs](./.commitlintrc.cjs)

   - [rules](https://commitlint.js.org/reference/rules.html)

```javascript
module.exports = {
    extends: [
        '@commitlint/config-conventional'
    ],
    ignores: [
        commit => commit.includes('init')
    ],
    rules: {
        'body-leading-blank': [1, 'always'],
        'footer-leading-blank': [1, 'always'],
        'header-max-length': [2, 'always', 108],
        'subject-empty': [2, 'never'],
        'subject-case': [0],
        'type-empty': [2, 'never']
    }
}
```
