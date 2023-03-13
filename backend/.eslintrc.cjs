module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    es6: true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'prettier'
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'no-console': 'warn'
  }
}
