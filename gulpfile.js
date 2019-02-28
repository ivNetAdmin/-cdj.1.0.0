// plugins
var gulp = require('gulp'),
    sass = require('gulp-sass'),    
    del = require('del'),
    browsersync = require('browser-sync').create();

// paths
var paths = {
   site: {
      dest: "./site"
   },
   style: {
      dest: "./site/css"
   },
   jscript: {    
      dest: "./site/js"
   },
   files: {
      sass: "./sass/*.scss",

      bstraprbcss: "./node_modules/bootstrap/dist/css/bootstrap-reboot.min.css",
      bstrapcss: "./node_modules/bootstrap/dist/css/bootstrap.min.css",
      parallaxcss: "./node_modules/universal-parallax/dist/universal-parallax.min.css",
      
      jquery: "./node_modules/jquery/dist/jquery.min.js",
      parallaxjs: "./node_modules/universal-parallax/dist/universal-parallax.min.js",
      bsstrapjs: "./node_modules/bootstrap/dist/js/bootstrap.min.js",
   }
};

// tasks
function browserSync() {
   browsersync.init({
     server: {
      baseDir: paths.site.dest
     },
     port: 3000
   });
 };

 function browserReload(done) {
   browsersync.reload();
   done();
}

function clean() {
   return del([paths.style.dest, paths.jscript.dest]);
 };

function style(){
   return (gulp
         .src(paths.files.sass)
         .on("error",sass.logError)
       //  .pipe(sourcemaps.init())
         .pipe(sass())
      //   .pipe(postcss([autoprefixer(),cssnano()]))
      //   .pipe(sourcemaps.write())
         .pipe(gulp.dest(paths.style.dest))
   );
         //.pipe(browsersync.stream()));
};


function librarycss(){
   return (
      gulp
         .src([paths.files.bstraprbcss, paths.files.bstrapcss, paths.files.parallaxcss])
         .on("error",sass.logError)
        // .pipe(sourcemaps.init())
         .pipe(sass())
       //  .pipe(postcss([autoprefixer(),cssnano()]))
       //  .pipe(sourcemaps.write())
         .pipe(gulp.dest(paths.style.dest))
       //  .pipe(browsersync.stream())
   );
};

function libraryjs(){
   return (
      gulp
         .src([paths.files.jquery, paths.files.bsstrapjs, paths.files.parallaxjs])
         //.pipe(sourcemaps.init())
         //.pipe(sourcemaps.write())
         .pipe(gulp.dest(paths.jscript.dest))
         //.pipe(browsersync.stream())
   );
};

// watch files
function watchfiles(){
   //gulp.watch(paths.files.pages, gulp.series(html, browserReload));    
   gulp.watch(paths.files.sass, gulp.series(style, browserReload));        
   //gulp.watch(paths.jscript.src, gulp.series(javascript, browserReload));
};

// complex tasks
const libraries = gulp.series(clean, gulp.parallel(librarycss, libraryjs));
const watch = gulp.parallel(browserSync, watchfiles);

// export
exports.clean = clean;
exports.style = style;
exports.librarycss = librarycss;
exports.libraryjs = libraryjs;
exports.watch = watch;

exports.default = watch;