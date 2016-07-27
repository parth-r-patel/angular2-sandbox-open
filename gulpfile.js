var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');
var cssConcat = require('gulp-concat-css');
var runSequence = require('run-sequence');

gulp.task('less', function() {
  return gulp.src(['src/styles/app.styles.less', 'src/app/**/*.less'])
  .pipe(less({
    paths: ['./node_modules/bootstrap-less']
  }))
  .pipe(cssConcat('styles.css'))
  .pipe(gulp.dest('./src/styles/css'));
});

gulp.task('fonts', () => {
  return gulp.src('node_modules/bootstrap-less/fonts/**/*.{eot,svg,ttf,woff,woff2}')
    .pipe(gulp.dest('dist/styles/fonts'));
});

gulp.task('less-dist', function() {
  return gulp.src(['src/styles/app.styles.less', 'src/app/**/*.less'])
  .pipe(less({
    paths: ['./node_modules/bootstrap-less']
  }))
  .pipe(cssConcat('styles.css'))
  .pipe(gulp.dest('./dist/styles/css'));

  gulp.src('dist/styles/css/app.styles.css')
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }));
});

gulp.task('css-minify', function() {
  return gulp.src('dist/styles/css/*.css')
  .pipe(cssmin())
  .pipe(gulp.dest('dist/styles/css'));
});

gulp.task('default', ['less'], function() {

});

gulp.task('dist', function() {
  runSequence('less-dist', 'css-minify', 'fonts');
});
