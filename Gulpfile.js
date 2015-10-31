var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

gulp.task('bootstrap_styles', function() {
	gulp.src('bower_components/bootstrap-sass/assets/stylesheets/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('stylesheets/'));
});


gulp.task('default',function() {
    gulp.watch('sass/**/*.scss',['styles']);
});