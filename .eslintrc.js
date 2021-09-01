module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: ["tsconfig.json"]
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    "no-param-reassign": 0,
    "@typescript-eslint/consistent-type-imports": "error",
    "import/prefer-default-export": 0,
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "off",
  },
};
