/**
 * Copyright (c) 2017-present, Raphael Amorim.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const runESLint = require('./run');

console.log('Hint: use "$ yarn linc" to lint only changed files');

console.log('> Linting all files...');

if (runESLint({onlyChanged: false})) {
  console.log('Lint passed.');
} else {
  console.log('Lint failed.');
  process.exit(1);
}
