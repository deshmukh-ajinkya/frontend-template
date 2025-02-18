/** @type {import('jest').Config} */
const config = {
  clearMocks: true,

  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: "jsdom",

  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|webp|avif|svg)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },

  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest", // for TS and TSX files
    "^.+\\.jsx?$": "babel-jest", // for JS files
  },

  resetMocks: true,

  transformIgnorePatterns: ["node_modules/(?!next|react|react-dom)"],

  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],

  testPathIgnorePatterns: ["/node_modules/", "/.next/"],

  watchman: true,

  slowTestThreshold: 5,

  testRunner: "jest-circus/runner",
};

module.exports = config;
