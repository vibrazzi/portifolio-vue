module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
    'plugin:vue/vue3-essential',
    'plugin:security/recommended',
    'plugin:sonarjs/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['security', 'sonarjs'],
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/no-unused-vars': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-console': 'error',
    'no-debugger': 'error',
    'security/detect-object-injection': 'off',
    'security/detect-non-literal-regexp': 'off',
    'security/detect-unsafe-regex': 'off',
    'sonarjs/cognitive-complexity': ['error', 15],
    'sonarjs/no-duplicate-string': ['error', 5],
    'sonarjs/no-identical-functions': 'error'
  },
  ignorePatterns: ['dist/', 'node_modules/', '*.config.js']
}