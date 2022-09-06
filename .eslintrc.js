module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  "parser": "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    project: ["tsconfig.json"],
  },
  "plugins": [
    "@typescript-eslint",
  ],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  "rules": {
  }
}
