module.exports = {
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  root: true,
  ignorePatterns: [
    ".eslintrc.js",
    "jest.config.js",
    "build.js",
    "buildConfigs.js",
    "docs/build.js",
    "docs/buildConfigs.js",
    "docs/docsServer.js",
    "docs/public/",
    "lib/"
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": "error"
  }
};
