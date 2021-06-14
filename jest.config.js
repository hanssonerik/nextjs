module.exports = {
  globals: {
    'ts-jest': {}
  },
  modulePaths: ['.'],
  testEnvironment: 'jsdom',
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100
    }
  }
}
