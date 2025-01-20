const { pathsToModuleNameMapper } = require('ts-jest');

const config = require('./tsconfig.json');

module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: '.',
  testRegex: ['/test/unit/.*\\.spec\\.ts$'],
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['<rootDir>/src/**/*.(t|j)s'],
  coveragePathIgnorePatterns: [
    '<rootDir>/src/infrastructure',
    '<rootDir>/src/.*\\.controller\\.ts$',
    '<rootDir>/src/.*\\.repository\\.ts$',
    '<rootDir>/src/.*\\.module\\.ts$',
    '<rootDir>/src/.*/index\\.ts$',
    'main.ts',
  ],
  coverageDirectory: './coverage',
  testEnvironment: 'node',
  moduleNameMapper: pathsToModuleNameMapper(config.compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
};
