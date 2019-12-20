module.exports = {
  preset: "ts-jest",
  globals: {
    "ts-jest": {
      diagnostics: false,
    },
  },
  testEnvironment: "node",
  moduleDirectories: ["node_modules", "src"],
  testMatch: ["**/tests/*.test.ts"]
}