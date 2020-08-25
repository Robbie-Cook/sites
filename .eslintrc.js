module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
  ],
  plugins: ["@typescript-eslint", "prettier", "react-hooks"],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true,
    },
  },
  overrides: [
    {
      excludedFiles: "**/*/node_modules/**/*",
    },
  ],
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  globals: {
    cy: true,
    Cypress: true,
  },
  rules: {},
};
