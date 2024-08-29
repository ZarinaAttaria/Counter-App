export default {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["./setupTests.js"],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
    "^.+\\.css$": "<rootDir>/__mocks__/styleMock.js",
  },
  testMatch: ["**/?(*.)+(test).[jt]s?(x)"],
};
