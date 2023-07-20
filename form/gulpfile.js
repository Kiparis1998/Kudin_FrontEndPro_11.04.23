const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const clean = require('gulp-clean');
const browserSync = require('browser-sync').create();

gulp.task('concatAndUglifyPlugins', () => {
    return gulp.src('app/js/*.js')
        .pipe(concat('concat.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('minify-css', () => {
    return gulp.src('app/css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist'));
});

gulp.task('clean', () => {
    return gulp.src('dist', {read: false})
        .pipe(clean());
});

gulp.task('browserSyncServe', (cb) => {
    browserSync.init({
        server: {
            baseDir: './app'
        }
    });
    cb();
});

gulp.task('watchTask', () => {
    gulp.watch('app/*.html').on('change', browserSync.reload);
    gulp.watch(['app/**/*.css', 'app/**/*.js']).on('change', gulp.series('concatAndUglifyPlugins', 'minify-css', browserSync.reload));
})

gulp.task('default', gulp.series('clean', gulp.parallel('concatAndUglifyPlugins', 'minify-css'), 'browserSyncServe', 'watchTask'));