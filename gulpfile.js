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
const livereload = require('gulp-livereload');
const uglify = require('gulp-uglify');
const gulpif = require('gulp-if');
const scsslint = require('gulp-scss-lint');
const eslint = require('gulp-eslint');
const runSequence = require('run-sequence');

const dev = !argv.production ? true : false;

gulp.task('bundle', () => {
  const bundler = browserify({
    cache: {},
    packageCache: {},
    entries: ['./resources/js/app.js'],
    debug: dev
  });

  bundler.transform(babelify, {presets: ['es2015', 'react']});

  if (dev) {
    bundler = watchify(bundler);
  }

  bundler.on('update', bundle);

  function bundle() {
    return bundler
      .bundle()
      .pipe(source('./resources/js/app.js'))
      .pipe(bufferifyify())
      .pipe(gulpif(!dev, uglify()))
      .pipe(rename('app.js'))
      .pipe(gulp.dest('./public/js/'))
  }

  bundle();
});

gulp.task('sass', () => {
  gulp.src('./resources/scss/app.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: dev ? 'nested' : 'compressed'
    }).on('error', sass.logError))
    .pipe(gulpif(dev, sourcemaps.write()))
    .pipe(gulp.dest('./public/css'))
    .pipe(gulpif(dev, livereload()));
});

gulp.task('watch', () => {
  livereload.listen();
  gulp.watch('./resources/scss/**/*.scss', ['sass']);
  gulp.watch(['./app/**/*.js'], () => {
    livereload.reload();
  });
});

gulp.task('copyfonts', () => {
   gulp.src('./bower_components/font-awesome/fonts/**/*.{ttf,woff,woff2,eof,svg}')
   .pipe(gulp.dest('./public/fonts'));
});

gulp.task('scss-lint', () => {
  return gulp.src([
    './resources/scss/**/*.scss',
    '!./resources/scss/settings/_mixins.scss'])
    .pipe(scsslint());
});

gulp.task('js-lint', () => {
  return gulp.src(['./app/**/*.js'])
    .pipe(eslint({
      extends: 'eslint:recommended',
      plugins: [
        "react"
      ],
      ecmaFeatures: {
        modules: true,
        jsx: true,
        classes: true,
        blockBindings: true,
        arrowFunctions: true,
        forOf: true
      },
      rules: {
        'react/react-in-jsx-scope': 1,
      },
      env: {
        node: true
      }
    }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('startServer', () => {
  nodemon({
    script: 'start.js',
    ext: 'js ejs',
    env: {'NODE_ENV': 'development'},
  });
});

gulp.task('compile', ['copyfonts', 'bundle', 'sass']);
gulp.task('lint', ['scss-lint', 'js-lint']);
gulp.task('default', () => {
  runSequence('lint', ['compile', 'watch', 'startServer']);
});
