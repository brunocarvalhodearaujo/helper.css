const gulp = require('gulp')
const sass = require('gulp-sass')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')

gulp.task('build', function () {
  return gulp.src('src/main.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(concat('helper.css'))
    .pipe(gulp.dest('./dist'))
})

gulp.task('default', [ 'build' ], function () {
  return gulp.src('dist/helper.css')
    .pipe(cssmin())
    .pipe(concat('helper.min.css'))
    .pipe(gulp.dest('./dist'))
})

gulp.task('watch', [ 'default' ], function () {
  gulp.watch('src/**/*.scss', [ 'default' ])
})
