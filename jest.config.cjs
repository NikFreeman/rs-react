/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  coverageReporters: ['text'],

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8',

  coveragePathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/src/models/',
    '<rootDir>/src/main.tsx',
    '<rootDir>/src/vite-env.d.ts',
  ],

  // A preset that is used as a base for Jest's configuration
  // preset: undefined,
  preset: 'ts-jest',

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],

  // The test environment that will be used for testing
  testEnvironment: 'jest-environment-jsdom',
};
