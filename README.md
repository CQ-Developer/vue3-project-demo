# eslint

1. 安装及初始化

```sh
npm init @eslint/config
```

2. 安装插件(可选)

```sh
npm install -D @babel/eslint-parser
```

3. 配置规则

   - [eslint](https://eslint.org/docs/latest/rules)

   - [vue](https://eslint.vuejs.org/rules/)

   - [ts](https://typescript-eslint.io/rules/)

4. *.eslintignore*

```ignore
dist
```

5. *package.json*

```json
{
   "scripts": {
      "eslint": "eslint src"
   }
}
```

# prettier

1. 安装

```sh
npm install -D -E prettier
npm install -D eslint-config-prettier
```

2. *.prettierrc*

```json
{
    "singleQuote": true,
    "semi": false,
    "bracketSpacing": true,
    "htmlWhitespaceSensitivity": "ignore",
    "endOfLine": "auto",
    "trailingComma": "all",
    "tabWidth": 2
}
```

3. *.prettierignore*

```ignore
**/public
**/dist
```

4. *package.json*

```json
{
   "scripts": {
      "format": "prettier --write src"
   }
}
```
