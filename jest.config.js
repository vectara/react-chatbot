/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["src/vui", "docs/"],
  coverageReporters: ["text", "text-summary"],
  coveragePathIgnorePatterns: ["node_modules", "src/vui"],
  setupFilesAfterEnv: ["./setupTests.ts"],
  moduleDirectories: ["<rootDir>/node_modules", "src"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "<rootDir>/node_modules/jest-css-modules"
  }
};
