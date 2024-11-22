import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './'
})

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  collectCoverageFrom: [
    'src/**',
    // Ignore test files
    '!src/**/*.test.js',
    // Ignore server file
    '!src/index.js',
    // Ignore pages because of conflicts with nextjs routing
    '!src/pages/**/*'
  ],
  testMatch: [
    '<rootDir>/src/**/*.test.{js,jsx,ts,tsx}'
  ],
  coverageReporters: [
    'lcov',
    'text'
  ],
  moduleDirectories: [
    'jest',
    'node_modules',
    'src'
  ],
  modulePathIgnorePatterns: [
    '<rootDir>/config',
    '<rootDir>/src/.*/__mocks__'
  ],
  moduleNameMapper: {
    // Handle module aliases
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  setupFilesAfterEnv: [
    './jest/jest-setup.js'
  ],
  testEnvironment: 'jest-environment-jsdom'
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)
