const gulp = require('gulp');
const sass = require('gulp-sass');
const browserify = require('browserify');
const babelify = require('babelify');
const watchify = require('watchify');
const source = require('vinyl-source-stream');
const bufferifyify = require('vinyl-buffer');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const argv = require('yargs').argv;
const nodemon = require('gulp-nodemon');

gulp.task('bundle', () => {
  const bundler = browserify({
    cache: {},
    packageCache: {},
    entries: ['./resources/js/app.js'],
    debug: true
  });

  bundler.transform(babelify, {presets: ['es2015', 'react']});

  if (!argv.production) {
    bundler = watchify(bundler);
  }

  bundler.on('update', bundle);

  function bundle() {
    return bundler
      .bundle()
      .pipe(source('./resources/js/app.js'))
      .pipe(bufferifyify())
      .pipe(rename('app.js'))
      .pipe(gulp.dest('./public/js/'))
  }

  bundle();
});

gulp.task('startServer', () => {
  nodemon({
    script: 'start.js',
    ext: 'js ejs',
    env: { 'NODE_ENV': 'development' }
  })
});

gulp.task('default', ['bundle', 'startServer']);
gulp.task('compile', ['bundle']);
