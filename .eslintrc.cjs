module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/vue3-essential',
        "prettier"
    ],
    overrides: [
        {
            env: {
                node: true
            },
            files: [
                '.eslintrc.{js,cjs}'
            ],
            parserOptions: {
                sourceType: 'script'
            }
        }
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module'
    },
    plugins: [
        '@typescript-eslint',
        'vue'
    ],
    rules: {
        'no-var': 'error',
        'no-unused-vars': 'off',
        'no-unexpected-multiline': 'error',
        'no-useless-escape': 'warn',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/prefer-ts-expect-error': 'error',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/ban-ts-comment': ['warn', {
            'ts-ignore': 'allow-with-description',
            'ts-expect-error': 'allow-with-description',
            'ts-nocheck': 'allow-with-description',
            'ts-check': 'allow-with-description',
        }],
        '@typescript-eslint/prefer-ts-expect-error': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/no-mutating-props': 'warn',
        'vue/attribute-hyphenation': 'off'
    }
}
