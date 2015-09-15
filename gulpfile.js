var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');

var paths = {
  swww:['./swww/js/*.js','./swww/templates/*.html','./swww/index.html'],
  sass: ['./scss/**/*.scss']
};

gulp.task('default', ['sass','swww-copy']);

/**
 * 编译sass
 */
gulp.task('sass', function(done) {
  gulp.src('./scss/*.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(concat('vjiaju.all.css'))
    .pipe(gulp.dest('./swww/css/'))
    .on('end', done);
});

/**
 * 复制swww目录内容到www
 */
gulp.task('swww-copy',function(done){
  gulp.src('./swww/**')
    .pipe(gulp.dest('./www'))
})

gulp.task('watch', function() {
  gulp.watch(paths.swww, ['default']);
  gulp.watch(paths.sass, ['default']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});
