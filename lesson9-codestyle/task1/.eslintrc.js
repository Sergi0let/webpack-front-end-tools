module.exports = {
  extends: 'eslint-config-airbnb-base',
  rules: {
    'no-console': 1,
  },
  parserOptions: {
    ecmaVersion: 10,
    sourceType: 'module',
  },
  env: {
    browser: true,
  },
};
