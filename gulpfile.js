var gulp = require('gulp'),
    less = require('gulp-less');

gulp.task('less', function () {
  return gulp.src('./style/*.less')
  .pipe(less())
  .pipe(gulp.dest('./style/'));
});
