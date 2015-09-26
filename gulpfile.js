var gulp = require('gulp');
var requireDir = require('require-dir');
var runSequence = require('run-sequence');

requireDir('./gulp');

function watchAndRecompile() {
    gulp.watch('./components/**/*', ['browserify']);
    gulp.watch(['./index.html', './index.js'], ['through']);
    gulp.watch('./style/**/*', ['less']);
}

gulp.task('watch',[ 'browserify', 'through', 'less' ], watchAndRecompile);

//TODO: https://github.com/atom/electron/blob/master/docs/tutorial/devtools-extension.md
