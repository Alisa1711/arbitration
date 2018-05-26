var gulp = require("gulp");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync");

gulp.task("style", function() {
  gulp.src("sass/style.scss")
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest("css"))
    .pipe(server.stream());
});

gulp.task("server", function() {
    server.init({
      server: "",
      notify: false,
      open: true,
      cors: true,
      ui: false
    });
});

gulp.watch("sass/**/*.{scss,sass}", ["style"]);
