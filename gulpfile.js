const gulp = require("gulp");
const gulpSass = require('gulp-sass')(require('sass'));

gulp.task('buildcss', function(){
    return gulp.src('./dev-assets/style.scss')
    .pipe(gulpSass())
    .pipe(gulp.dest('./prod-assets'));
});
