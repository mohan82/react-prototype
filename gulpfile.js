'use strict';
var gulp = require('gulp'),
    connect = require('gulp-connect');


gulp.task('connect', function () {
    connect.server({
        root: 'app',
        port: 9000,
        livereload: true
    });
});
// Html reload
gulp.task('html', function () {
    return gulp.src('app/**/*.html')
        .pipe(connect.reload());
});

gulp.task('js',function () {
    return gulp.src('app/**/*.js').pipe(connect.reload());
});
gulp.task('css',function () {
    return gulp.src('app/**/*.css').pipe(connect.reload());
});
gulp.task('default', ['connect','watch']);

gulp.task('watch', function () {
    gulp.watch(['app/**/*.html','app/**/*.js','app/**/*.css'], ['html','js','css']);
});

gulp.task("start",["connect"]);
