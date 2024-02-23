/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["src/vui"],
  coverageReporters: ["text", "text-summary"],
  coveragePathIgnorePatterns: ["node_modules", "src/vui"],
  setupFilesAfterEnv: ["./setupTests.ts"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "<rootDir>/node_modules/jest-css-modules"
  }
};
