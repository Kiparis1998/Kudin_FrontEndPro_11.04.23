'use strict'

const {src, dest} = require('gulp');
const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cssbeautify = require('gulp-cssbeautify');
const removeComments = require('gulp-strip-css-comments');
const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));
const cssnano = require('gulp-cssnano');
const rigger = require('gulp-rigger');
const uglify = require('gulp-uglify');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const panini = require('panini');
const imagemin = require('gulp-imagemin');
const del = require('del');
const browserSync = require('browser-sync').create();

/* Paths */
const srcPath = 'src/';
const distPath = 'dist/';

const path = {
    build: {
        html: distPath,
        css: distPath + 'assets/css',
        js: distPath + 'assets/js',
        images: distPath + 'assets/images',
        fonts: distPath + 'assets/fonts',
    },
    src: {
        html: srcPath + '*.html',
        css: srcPath + 'assets/css/*.css',
        js: srcPath + 'assets/js/*.js',
        images: srcPath + 'assets/images/**/*.{jpeg,png,svg,gif,ico,webp,webmanifest,xml,json}',
        fonts: srcPath + 'assets/fonts/**/*.{eot,woff,woff2,ttf,svg}',
    },
    watch: {
        html: srcPath + '**/*.html',
        css: srcPath + 'assets/css/**/*.css',
        js: srcPath + 'assets/js/**/*.js',
        images: srcPath + 'assets/images/**/*.{jpeg,png,svg,gif,ico,webp,webmanifest,xml,json}',
        fonts: srcPath + 'assets/fonts/**/*.{eot,woff,woff2,ttf,svg}',
    },
    clean: './' + distPath
}

gulp.task('server', () => {
    browserSync.init({
        server: {
            baseDir: './' + distPath
        }
    });
});

gulp.task('html', () => {
    panini.refresh();
    return src(path.src.html, {base: srcPath})
        .pipe(plumber())
        .pipe(panini({
            root: srcPath,
            layouts: srcPath + 'tpl/layouts/',
            partials: srcPath + 'tpl/partials/',
        }))
        .pipe(dest(path.build.html))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('css', () => {
    return src(path.src.css, {base: srcPath + 'assets/css/'})
        .pipe(plumber({
            errorHandler: function (err) {
                notify.onError({
                    title: 'CSS Error',
                    message: 'Error <%= error.message %>'
                })(err);
                this.emit('end');
            }
        }))
        .pipe(autoprefixer())
        .pipe(cssbeautify())
        .pipe(dest(path.build.css))
        .pipe(cssnano({
            zIndex: false,
            discardComments: {
                removeAll: true
            }
        }))
        .pipe(removeComments())
        .pipe(rename({
            suffix: '.min',
            extname: '.css'
        }))
        .pipe(dest(path.build.css))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('js', () => {
    return src(path.src.js, {base: srcPath + 'assets/js/'})
        .pipe(plumber({
            errorHandler: function (err) {
                notify.onError({
                    title: 'JS Error',
                    message: 'Error <%= error.message %>'
                })(err);
                this.emit('end');
            }
        }))
        .pipe(rigger())
        .pipe(dest(path.build.js))
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min',
            extname: '.js'
        }))
        .pipe(dest(path.build.js))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('images', () => {
    return src(path.src.images, {base: srcPath + 'assets/images/'})
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.mozjpeg({quality: 75, progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
        .pipe(dest(path.build.images))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('fonts', () => {
    return src(path.src.fonts, {base: srcPath + 'assets/fonts/'})
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('clean', () => {
    return del(path.clean)
})

gulp.task('watchFiles', () => {
    gulp.watch([path.watch.html, path.watch.css, path.watch.js, path.watch.images, path.watch.fonts])
        .on('change', gulp.series(gulp.parallel('html', 'css', 'js', 'images', 'fonts'), browserSync.reload));
})

gulp.task('build', gulp.series('clean', gulp.parallel('html', 'css', 'js', 'images', 'fonts')));
gulp.task('default', gulp.parallel('build', 'watchFiles', 'server'));