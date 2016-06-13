var gulp = require('gulp'),
  cleanCss = require('gulp-clean-css'),
  concat = require('gulp-concat'),
  rev = require('gulp-rev'),
  revCollector = require('gulp-rev-collector'),
  uglify = require('gulp-uglify'),
  imagemin = require('gulp-imagemin'),
  cache = require('gulp-cache'),
  htmlReplace = require('gulp-html-replace'),
  del = require('del');


var Files = {
  html: 'view/*.html',
  css: 'css/*.css',
  js: 'js/*.js',
  fonts: 'fonts/*',
  files: 'files/*',
  icon: '*.ico',
  images: 'img/**/*'
}

// fonts
gulp.task('fonts', function() {
  del('dist/files');
  return gulp.src(Files.fonts)
    .pipe(gulp.dest('dist/fonts/'))
});

// files
gulp.task('files', function() {
  return gulp.src(Files.files)
    .pipe(gulp.dest('dist/files/'))
});

// image
gulp.task('image', function() {
  return gulp.src(Files.images)
    .pipe(cache(imagemin({
      progressive: true
    })))
    .pipe(gulp.dest('dist/img/'))
});

// icon
gulp.task('icon', function() {
  return gulp.src(Files.icon)
    .pipe(cache(imagemin({
      progressive: true
    })))
    .pipe(gulp.dest('dist/'))
});

// css
gulp.task('css', function() {
  return gulp.src(Files.css)
    .pipe(concat('yyuisite.css'))
    .pipe(cleanCss())
    .pipe(rev())
    .pipe(gulp.dest('dist/css/'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('rev/css/'));
});

// js
gulp.task('js', function() {
  return gulp.src(Files.js)
    .pipe(concat('yyuisite.js'))
    .pipe(uglify())
    .pipe(rev())
    .pipe(gulp.dest('dist/js/'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('rev/js/'));
});

// reset css and js
gulp.task('resetCssAndJs', function() {
  return gulp.src(Files.html)
    .pipe(htmlReplace({
      'css': '../css/yyuisite.css',
      'js': '../js/yyuisite.js'
    }))
    .pipe(gulp.dest('build/html/'));
})

// html
gulp.task('html', ['resetCssAndJs'], function() {

  return gulp.src(['rev/**/*.json', 'build/html/*.html'])
    .pipe(revCollector())
    .pipe(gulp.dest('dist/view/'));
})

// delDistFolder
gulp.task('delDistFolder', function() {
  del('dist');
})
gulp.task('default', ['delDistFolder','fonts','files','image','icon','css','js','html'], function() {
  del(['build', 'rev']);
})