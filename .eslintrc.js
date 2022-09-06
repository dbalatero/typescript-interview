module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    project: ["tsconfig.json"],
  },
  "extends": "eslint:recommended",
}
