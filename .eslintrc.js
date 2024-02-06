module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:astro/recommended", "prettier"],
  overrides: [
    {
      files: [".eslintrc.js", "*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        sourceType: "script",
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
};
