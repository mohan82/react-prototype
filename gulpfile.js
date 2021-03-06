'use strict';
var gulp = require('gulp'),
    connect = require('gulp-connect'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    react = require('gulp-react'),
    usemin = require('gulp-usemin'),
    rev = require('gulp-rev'),
    minifyCss = require('gulp-minify-css');


var CONFIG = {
    JS: ['app/js/*.js', 'app/js/**/*.js'],
    DIST: 'dist/',
    SRC: 'app/',
    TEMP: "app/temp/"
};

gulp.task('connect', function () {
    connect.server({
        root: CONFIG.SRC,
        port: 9000,
        livereload: true
    });
});

function _jsx() {
    return gulp.src(CONFIG.JS)
        .pipe(react())
        .pipe(gulp.dest(CONFIG.TEMP))
}

gulp.task('jsx', function () {
    return _jsx().pipe(connect.reload());
});


gulp.task('build',['jsx'], function () {
    return gulp.src('app/index.html')
        .pipe(usemin({
            css: [rev()],
            js: [uglify(), rev()],
            inlinejs: [uglify()],
            inlinecss: [minifyCss(), 'concat']
        }))
        .pipe(gulp.dest(CONFIG.DIST));
});


gulp.task('watch', function () {
    gulp.watch(['app/**/*.html', 'app/**/*.js', 'app/**/*.css'],
        ['jsx']);
});


gulp.task('default', ['jsx', 'connect', 'watch']);


gulp.task("run-app", ["build"],function () {
    connect.server({
        root: CONFIG.DIST,
        port: process.env.PORT || 5000,
        livereload: false
    });

});

