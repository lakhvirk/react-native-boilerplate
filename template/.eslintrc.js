module.exports = {
  root: true,
  env: {
    'jest/globals': true,
  },
  extends: ['@react-native'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint/eslint-plugin'],
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
};
