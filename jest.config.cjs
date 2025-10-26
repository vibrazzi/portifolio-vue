module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: [
    '**/tests/**/*.spec.js',
    '**/src/**/*.test.js'
  ],
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/main.js',
    '!src/main.ts'
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov', 'text']
}