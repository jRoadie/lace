const gulp = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');

gulp.task('default', () => {
    return gulp.src('src/es6/**/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist/es6'));
});

gulp.task('concat', function() {
    return gulp.src([
            './src/lace.js'
            , './src/annotation.js'
            , './src/taglet.js'
            , './src/scriptlet.js'
            , './src/scope.js'
            , './src/util.js'
            , './src/glace.js'
        ])
        .pipe(concat('lace.js'))
        .pipe(gulp.dest('./dist/'));
});