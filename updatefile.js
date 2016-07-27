/*!
 * updater-gitignore <https://github.com/jonschlinkert/updater-gitignore>
 *
 * Copyright (c) 2015 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var conflicts = require('base-fs-conflicts');
var isValid = require('is-valid-app');

module.exports = function(app) {
  if (!isValid(app, 'updater-gitignore')) return;
  app.use(conflicts());
  app.use(require('generate-gitignore'));
};
