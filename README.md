# eslint

1. install

```sh
npm init @eslint/config
```

2. 配置规则

   - [eslint](https://eslint.org/docs/latest/rules)

   - [vue](https://eslint.vuejs.org/rules/)

   - [ts](https://typescript-eslint.io/rules/)

3. *.eslintignore*

```ignore
dist
```

4. *package.json*

```json
{
   "scripts": {
      "eslint": "eslint src"
   }
}
```

# prettier

1. install

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

# stylelint

1. install

```sh
npm install -D stylelint postcss-html stylelint-config-standard-scss stylelint-config-standard-vue stylelint-config-prettier-scss stylelint-config-recess-order
```
