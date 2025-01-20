module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'unused-imports'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  settings: {
    'import/resolver': {
      typescript: {
        project: 'tsconfig.json',
      },
      node: {
        extensions: ['.js', '.ts', '.json'],
      },
    },
  },
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['node_modules/', 'dist/', '!jest.config.js', '!**/.eslintrc.js'],
  overrides: [
    {
      files: ['*.js'],
      parser: 'espree', // Use the default JavaScript parser for .js files
      rules: {
        '@typescript-eslint/no-var-requires': 'off', // Allow requires in .js files
        '@typescript-eslint/no-require-imports': 'off', // Allow `require` in .js files
      },
    },
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    },
  ],
  rules: {
    'no-console': [
      'error',
      {
        allow: ['warn', 'error', 'clear', 'debug'],
      },
    ],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    'unused-imports/no-unused-imports': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'type'],
        'newlines-between': 'always',
        distinctGroup: true,
        alphabetize: {
          order: 'asc',
          caseInsensitive: false,
        },
      },
    ],
  },
};
