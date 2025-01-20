const path = require('path');

const buildEslintCommand = (filenames) =>
  `npm run lint:dry -- ${filenames.map((f) => path.relative(process.cwd(), f)).join(' ')}`;

const buildPrettierCommand = (filenames) => `npm run format:dry ${filenames.join(' ')}`;

module.exports = {
  '*.{js,ts}': [buildEslintCommand, buildPrettierCommand],
  '*.{md,json}': [buildPrettierCommand],
};
