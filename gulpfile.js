var gulp = require('gulp');
var eslint = require('gulp-eslint');

gulp.task('lint', function(){
  return gulp.src(['./src/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('watch', function() {
  gulp.watch(['./src/**/*.js'], ['lint']);
});

gulp.task('default', ['watch', 'lint']);