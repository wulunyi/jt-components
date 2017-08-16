/**
 * gulp 配置文件
 */

const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

// 编译并压缩js
gulp.task('convertJS', function() {
  return gulp.src('src/mixins/*/*.js')
    .pipe(babel())
    .pipe(uglify())
    .pipe(rename({basename: 'lib', extname: '.js'}))
    .pipe(gulp.dest('src/mixins'));
});

gulp.task('start', ['convertJS']);
