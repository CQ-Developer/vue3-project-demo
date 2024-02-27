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
        'type-empty': [2, 'never'],
        'type-enum': [2, 'always',
            [
                'build',
                'chore',
                'ci',
                'docs',
                'feat',
                'fix',
                'perf',
                'refactor',
                'revert',
                'style',
                'test',
            ]
        ]
    }
}
```

3. [package.json](./package.json)

```json
{
    "scripts": {
        "commitlint": "commitlint --config .commitlintrc.cjs -e -V"
    }
}
```

4. [commit-msg](./.husky/commit-msg)

```sh
npm run commitlint
```

# [element-plus](https://element-plus.org/zh-CN/)

1. install

```sh
npm install element-plus @element-plus/icons-vue
```

2. [main.ts](./src/main.ts)

```typescript
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

app.use(ElementPlus, { locale: zhCn })
```

3. 按需导入

```sh
npm install -D unplugin-vue-components unplugin-auto-import
```

- [vite.config.ts](./vite.config.ts)

```typescript
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ]
})
```

# 环境配置

1. [dev](./.env.development)

```properties
NODE_ENV='development'
VITE_APP_TITLE='vue3-project-demo'
VITE_APP_BASE_API='/dev-api'
VITE_SERVE='http://xxx.com'
```

2. [prod](./.env.production)

```properties
NODE_ENV='production'
VITE_APP_TITLE='vue3-project-demo'
VITE_APP_BASE_API='/prod-api'
VITE_SERVE='http://yyy.com'
```

3. [test](./.env.test)

```properties
NODE_ENV='production'
VITE_APP_TITLE='vue3-project-demo'
VITE_APP_BASE_API='/test-api'
VITE_SERVE='http://zzz.com'
```

4. [package.json](./package.json)

```json
{
    "scripts": {
        "build:test": "vue-tsc && vite build --mode test",
        "build:pro": "vue-tsc && vite build --mode production"
    }
}
```
