// plugins
var gulp = require('gulp'),
    sass = require('gulp-sass'),    
    del = require('del'),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    cssnano = require("cssnano"),
    imagemin = require('gulp-imagemin'),
    minify = require('gulp-minify'),
    htmlmin = require('gulp-htmlmin'),
    browsersync = require('browser-sync').create()
;

// paths
var paths = {
   site: {
      dest: "./site"
   },
   style: {
      dest: "./site/css"
   },
   jscript: {    
      src: "./javascript/*",  
      dest: "./site/js",
      lib: "./site/js/lib"
   },
   image: {      
      dest: "./site/assets/images"
   },
   video: {      
      dest: "./site/assets/videos"
   },
   webfont: {      
      dest: "./site/webfonts"
   },
   files: {
      html: "./site/*.html",
      pages: "./pages/*.html",
      sass: "./sass/*.scss",
      images: "./images/*",
      videos: "./videos/*",
      bstraprbcss: "./node_modules/bootstrap/dist/css/bootstrap-reboot.min.css",
      bstrapcss: "./node_modules/bootstrap/dist/css/bootstrap.min.css",
      parallaxcss: "./node_modules/universal-parallax/dist/universal-parallax.min.css",
      facss: "./node_modules/@fortawesome/fontawesome-free/css/all.css",
      csslib: "./css-lib/*.css",
      
      webfonts: "./node_modules/@fortawesome/fontawesome-free/webfonts/*",

      jquery: "./node_modules/jquery/dist/jquery.min.js",
      parallaxjs: "./node_modules/universal-parallax/dist/universal-parallax.min.js",
      bsstrapjs: "./node_modules/bootstrap/dist/js/bootstrap.min.js",
      fajs: "./node_modules/@fortawesome/fontawesome-free/js/all.min.js"
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

function clean() {gulp 
   return del([paths.site.dest]);
 };

 function librarycss(){
   return (
      gulp
         .src([paths.files.bstraprbcss, paths.files.bstrapcss, paths.files.parallaxcss, paths.files.facss, paths.files.csslib])
         .on("error",sass.logError)
        // .pipe(sourcemaps.init())
         .pipe(sass())
         .pipe(postcss([autoprefixer(),cssnano()]))
       //  .pipe(sourcemaps.write())
         .pipe(gulp.dest(paths.style.dest))
       //  .pipe(browsersync.stream())
   );
};

function style(){
   return (gulp
         .src(paths.files.sass)
         .on("error",sass.logError)
       //  .pipe(sourcemaps.init())
         .pipe(sass())
         .pipe(postcss([autoprefixer(),cssnano()]))
      //   .pipe(sourcemaps.write())
         .pipe(gulp.dest(paths.style.dest))
         .pipe(browsersync.stream())
   );
         
};

function libraryjs(){
   return (
      gulp
         .src([paths.files.jquery, paths.files.bsstrapjs, paths.files.parallaxjs, paths.files.fajs])
         //.pipe(sourcemaps.init())
         //.pipe(sourcemaps.write())
         .pipe(gulp.dest(paths.jscript.dest))         
         //.pipe(browsersync.stream())
   );
};

function javascript(){
   return (
      gulp
         .src([paths.jscript.src])
        // .pipe(sourcemaps.init())
         .pipe(minify())
        // .pipe(sourcemaps.write())
         .pipe(gulp.dest(paths.jscript.dest))
         .pipe(browsersync.stream())
   );
};

function image(){
   return (
      gulp
         .src(paths.files.images)
         .pipe(imagemin())
         .pipe(gulp.dest(paths.image.dest))
         .pipe(browsersync.stream())
   );
};

function video(){
   return (
      gulp
         .src(paths.files.videos)     
         .pipe(gulp.dest(paths.video.dest))
         .pipe(browsersync.stream())
   );
};
function webfonts(){
   return (
      gulp
         .src(paths.files.webfonts) 
         .pipe(gulp.dest(paths.webfont.dest))
         .pipe(browsersync.stream())
   );
};

function html(){
   return (
      gulp
         .src(paths.files.pages)
         .pipe(htmlmin({ collapseWhitespace: true }))
         .pipe(gulp.dest(paths.site.dest))
         .pipe(browsersync.stream())
   );
};

// watch files
function watchfiles(){
   gulp.watch(paths.files.pages, gulp.series(html, browserReload));    
   gulp.watch(paths.files.sass, gulp.series(style, browserReload));        
   gulp.watch(paths.jscript.src, gulp.series(javascript, browserReload));
};

// complex tasks
const libraries = gulp.parallel(librarycss, libraryjs, webfonts);
const build = gulp.series(clean, gulp.parallel(libraries, style, javascript, image, video, html));
const quick_build = gulp.parallel(libraries, style, javascript, html);
const watch = gulp.parallel(browserSync, watchfiles);

// export
exports.clean = clean;

exports.librarycss = librarycss;
exports.libraryjs = libraryjs;

exports.webfonts = webfonts;

exports.libraries = libraries;

exports.style = style;
exports.javascript = javascript;
exports.image = image;
exports.video = video;
exports.html = html;

exports.quick_build = quick_build;
exports.build = build;
exports.watch = watch;

exports.default = watch;