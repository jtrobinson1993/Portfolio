const path = require('path');
const gulp = require('gulp');
const less = require('gulp-less');
const babel = require('gulp-babel');
const minifyJS = require('gulp-uglifyjs');
const minifyCSS = require('gulp-clean-css');
const minifyHTML = require('gulp-cleanhtml');
const autoPrefixer = require('gulp-autoprefixer');

gulp.task('default', ['less', 'js', 'html']);

gulp.task('less', () => {
    return gulp
        .src('./web/src/**/*.less')
        .pipe(less({
            paths:[path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(autoPrefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(minifyCSS())
        .pipe(gulp.dest('./web/dist'));
});

gulp.task('js', () => {
    return gulp
        .src('./web/src/**/*.js')
        .pipe(babel({
            presets: ['es2015', 'es2016']
        }))
        .pipe(minifyJS())
        .pipe(gulp.dest('./web/dist'));
});

gulp.task('html', () => {
    return gulp
        .src('./web/src/**/*.html')
        .pipe(minifyHTML())
        .pipe(gulp.dest('./web/dist'))
});

gulp.task('watch', ['default'], () => {
  gulp.watch('./web/src/**/*.js', ['js']);
  gulp.watch('./web/src/**/*.less', ['less']);
  gulp.watch('./web/src/**/*.html', ['html']);
});
