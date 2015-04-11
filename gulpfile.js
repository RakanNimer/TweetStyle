var gulp = require('gulp'); 

var source = require('vinyl-source-stream');
var browserify = require('browserify');
var jshint    = require('gulp-jshint');
var concat    = require('gulp-concat');
var uglify    = require('gulp-uglify');
var rename    = require('gulp-rename');
var minifyCSS = require('gulp-minify-css');
var fs = require('fs');
var streamify = require('gulp-streamify');

// Lint Task
gulp.task('lint', function() {
  return gulp.src('lib/sweet-alert.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {

  gulp.src('example/example.css')
    .pipe(sass())
    .pipe(rename('example.css'))
    .pipe(gulp.dest('example'));

  return gulp.src(['lib/tweet-dom-creator.css'])
    .pipe(concat('tweet-dom-creator.min.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('lib'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {

  browserify('./example/example.js')
    .bundle()
    .pipe(source('example.min.js'))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest('./example'));

  browserify('./lib/tweet-dom-creator.js')
    .bundle()
    .pipe(source('tweet-dom-creator.min.js'))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest('lib'));
});

// Watch Files For Changes
gulp.task('watch', function() {
  gulp.watch('lib/*.js', ['lint', 'scripts']);
  gulp.watch(['lib/*.scss', 'lib/*.css'], ['sass']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);