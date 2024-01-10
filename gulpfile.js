const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify')

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

function scripts() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'))
}

exports.default = gulp.parallel(styles, images, scripts);
exports.watch = function() {
    gulp.watch('./source/styles/*.scss', gulp.parallel(styles));
    gulp.watch('./source/scripts/*.js', gulp.parallel(scripts));
}