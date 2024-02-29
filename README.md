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
  htmlWhitespaceSensitivity: 'ignore',
  endOfLine: 'auto',
  trailingComma: 'none',
  tabWidth: 2,
  singleAttributePerLine: true,
  printWidth: 160,
  proseWrap: 'preserve'
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
  extends: ['@commitlint/config-conventional'],
  ignores: [(commit) => commit.includes('init')],
  rules: {
    'body-leading-blank': [1, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 108],
    'subject-empty': [2, 'never'],
    'subject-case': [0],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
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
        'test'
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

# [svg](https://github.com/vbenjs/vite-plugin-svg-icons/tree/main#readme)

1. install

```sh
npm install -D vite-plugin-svg-icons
```

2. [vite.config.ts](./vite.config.ts)

```typescript
import path from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

export default defineConfig({
  plugins: [
    createSvgIconsPlugin({
      iconDirs: [path.resolve(__dirname, 'src', 'assets', 'svg')],
      symbolId: 'icon-[dir]-[name]'
    })
  ]
})
```

3. 在[main.ts](./src/main.ts)中全局注册

```typescript
import 'virtual:svg-icons-register'
```

4. 封装矢量图组件

   - [SvgIcon.vue](./src/components/SvgIcon.vue)

5. 使用插件的方式将SvgIcon注册为全局组件

- 创建插件[index.ts](./src/components/index.ts)

```typescript
import { type App } from 'vue'
import SvgIcon from '@/components/SvgIcon.vue'

export default {
  install: (app: App) => {
    app.component('SvgIcon', SvgIcon)
  }
}
```

- 在[main.ts](./src/main.ts)中注册插件

```typescript
import MyPlugin from '@/components'

app.use(MyPlugin)
```

# scss

1. install

```sh
npm install -D sass
```

2. [reset.scss](./src/styles/reset.scss)

3. [index.scss](./src/styles/index.scss)

4. 配置scss全局变量

- [variable.scss](./src/styles/variable.scss)

```scss
$color: red;
```

- [vite.config.ts](./vite.config.ts)

```typescript
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        javascriptEnable: true,
        additionalData: '@import "./src/styles/variable.scss";'
      }
    }
  }
})
```

# [mockjs](https://github.com/nuysoft/Mock/wiki) and [vite-plugin-mock](https://github.com/vbenjs/vite-plugin-mock?tab=readme-ov-file#vite-plugin-mock)

1. install

```sh
npm install mockjs vite-plugin-mock -D
```

2. 配置[vite.config.ts](./vite.config.ts)

```typescript
import { viteMockServe } from 'vite-plugin-mock'

export default defineConfig(({ command }) => {
  return {
    plugins: [
      viteMockServe({
        enable: command == 'serve'
      })
    ]
  }
})
```

3. 配置[mock](./mock/user.ts)接口

# [axios](https://axios-http.com/)

1. install

```sh
npm install axios
```

2. 封装[axios](./src/utils/request.ts)

```typescript
import axios from 'axios'
import { ElMessage } from 'element-plus'

// 配置实例
const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000
})
// 配置请求拦截器
request.interceptors.request.use((config) => {
  console.log(config)
  return config
})
// 配置响应拦截器
request.interceptors.response.use(
  (resp) => {
    return resp.data
  },
  (err) => {
    let msg = ''
    const status = err.response.status
    switch (status) {
      case 401:
        msg = 'TOKEN过期'
        break
      case 403:
        msg = '无权访问'
        break
      case 404:
        msg = '请求地址错误'
        break
      case 500:
        msg = '服务器错误'
        break
      default:
        msg = '网络异常'
    }
    ElMessage({ type: 'error', message: msg })
    return Promise.reject(err)
  }
)
// 导出
export default request
```

3. 封装[api](./src/api/user/index.ts)

```typescript
import request from '@/utils/request'
import { API } from './type'
import type { Login, UserResponse, Token, User } from './type'

export const reqLogin = (data: Login) =>
  request.post<any, UserResponse<Token>>(API.LOGIN_URL, data)

export const reqUserInfo = () =>
  request.get<UserResponse<User>>(API.USERINFO_URL)
```

# [vue router](https://router.vuejs.org/zh/)

1. install

```sh
npm install vue-router@4
```

2. 定义路由规则[routes](./src/router/routes.ts)

```typescript
import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/view/login/index.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import('@/view/home/index.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/view/404/index.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'any',
    redirect: '/404'
  }
]
```

3. 配置路由器[router](./src/router/index.ts)

```typescript
import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './routes'

export default createRouter({
  history: createWebHashHistory(),
  routes: routes,
  scrollBehavior() {
    return { top: 0, left: 0 }
  }
})
```

4. 在[main.ts](./src/main.ts)中导入路由器插件

```typescript
import router from './router'

app.use(router)
```
