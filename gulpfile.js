const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function styles() {
    return gulp.src('./source/styles/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('./build/styles'))
}

function images() {
    return gulp.src('./images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'))
}

exports.default = gulp.parallel(styles, images);
exports.watch = function() {
    gulp.watch('./source/styles/*.scss', gulp.parallel(styles))
}