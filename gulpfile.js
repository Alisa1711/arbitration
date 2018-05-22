var gulp = require("gulp");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var browserSync = require('browser-sync');

gulp.task("style", function() {
  gulp.src("sass/style.scss")
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest("css"))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task("browser-sync", function() {
    browserSync({
        server: {
            baseDir: ""
        },
        notify: false
    });
});

gulp.watch("sass/**/*.{scss,sass}", ["style"]);
