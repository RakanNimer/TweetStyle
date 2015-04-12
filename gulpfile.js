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
var stringify = require('stringify');

// Lint Task
gulp.task('lint', function() {
  return gulp.src('lib/sweet-alert.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// Compile Our CSS
gulp.task('css', function() {

  gulp.src('example/example.css')
    .pipe(rename('example.css'))
    .pipe(gulp.dest('example'));

  return gulp.src(['lib/tweet-dom-creator.css'])
    .pipe(concat('tweet-dom-creator.min.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('lib'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    browserify({entries:'./lib/tweet-dom-creator.js', debug:true})
    .transform(stringify(['.html']))
    .bundle()
    .pipe(source('tweet-dom-creator.min.js'))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest('./lib/'));
  
     browserify({entries:'./tests/tweet-to-html.js', debug:true})
    .transform(stringify(['.html']))
    .bundle()
    .pipe(source('tweet-to-html.min.js'))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest('./lib/'));

     browserify({entries:'./example/example.js', debug: true})
    .transform(stringify(['.html']))
    .bundle()
    .pipe(source('example.min.js'))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest('./example/'));


});

// Default Task
gulp.task('build', ['lint', 'css', 'scripts']);