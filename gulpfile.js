// gulpfile.js

const { series } = require('gulp');

function defaultTask(cb) {
  // Default Gulp task code goes here. For now, it just finishes.
  cb();
}

exports.default = defaultTask;