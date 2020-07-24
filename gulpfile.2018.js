// Gulp.js configuration
// Commenting out everything except dev operations
// Trying to create a production build 03.14.18
var
// modules
  gulp = require('gulp'),
  // plugins = require('gulp-load-plugins'), //03.14.18
  // newer = require('gulp-newer'), //03.14.18
  // imagemin = require('gulp-imagemin'), //03.14.18
  // htmlclean = require('gulp-htmlclean'), //03.14.18
  // concat = require('gulp-concat'), //03.14.18
  // deporder = require('gulp-deporder'), //03.14.18
  // stripdebug = require('gulp-strip-debug'), //03.14.18
  // uglify = require('gulp-uglify'), //03.14.18
  sass = require('gulp-sass'),
  // postcss = require('gulp-postcss'), //03.14.18
  // assets = require('postcss-assets'), //03.14.18
  // autoprefixer = require('autoprefixer'), //03.14.18
  // mqpacker = require('css-mqpacker'), //03.14.18
  // cssnano = require('cssnano'), //03.14.18
  // VA! NOV 2019 gulp-sourcemaps is deprecated in gulp 4. Commenting out...
  //sourcemaps = require('gulp-sourcemaps');
  // var pump = require('pump'); //03.14.18 for gulp-uglify standalone
  browserSync = require('browser-sync').create();

// development mode?
devBuild = (process.env.NODE_ENV !== 'development'),

// folders
folder = {
  src: 'src/',
  build: 'build/'
}
;
// image processing - newer/imagenim
// VA! Nov 2019
// gulp.task('images', function() {
//   var out = folder.build + 'img/';
//   return gulp.src(folder.src + 'img/**/*')
//     .pipe(newer(out))
//     .pipe(imagemin({ optimizationLevel: 5 }))
//     .pipe(gulp.dest(out));
// });
// HTML processing - htmlclean
// VA! Nov 2019
// gulp.task('html', ['images'], function() {
//   var
//     //out = folder.build + 'html/', !VA
//     out = folder.build + '/',
//     // page = gulp.src(folder.src + 'html/**/*') !VA
//     page = gulp.src(folder.src + '/**/*')
//       .pipe(newer(out));

//   // minify production code
//   if (!devBuild) {
//     page = page.pipe(htmlclean());
//   }

//   return page.pipe(gulp.dest(out));
// });

// HTML processing
// VA! Nov 2019
// gulp.task('html', ['images'], function() {
//   var
//     out = folder.build + 'html/',
//     page = gulp.src(folder.src + 'html/**/*')
//       .pipe(newer(out));

//   // minify production code
//   if (!devBuild) {
//     page = page.pipe(htmlclean());
//   }

//   return page.pipe(gulp.dest(out));
// });


// JavaScript processing - deporder, concat, strip-debug, uglify
// VA! Nov 2019
// gulp.task('js', function() {
  
//   var jsbuild = gulp.src(folder.src + 'js/**/*')
//     .pipe(deporder())
//     // Changed !VA
//     .pipe(concat('scripts.js'));

//   if (!devBuild) {
//     jsbuild = jsbuild
//       .pipe(stripdebug())
//       .pipe(uglify());
//   }
  
//   return jsbuild.pipe(gulp.dest(folder.build + 'js/'));

// });



// CSS processing -- sass, postcss, postcss-assets, autoprefixer, cssmqpacker, cssnano
// VA! Nov 2019
// gulp.task('css', ['images'], function() {
  
//   var postCssOpts = [
// assets({ loadPaths: ['img/'] }),
// autoprefixer({ browsers: ['last 2 versions', '> 2%'] }),
// mqpacker
//   ];

//   if (!devBuild) {
//     postCssOpts.push(cssnano);
//   }

//   return gulp.src(folder.src + 'scss/style.scss')
//     .pipe(sass({
//       outputStyle: 'nested',
//       imagePath: 'img/',
//       precision: 3,
//       errLogToConsole: true
//     }))
//     .pipe(postcss(postCssOpts))
//     .pipe(gulp.dest(folder.build + 'css/'));
  
// });
// run all tasks
// gulp.task('run', ['html', 'css', 'js']);
// watch for changes -- only applies to production operations, so add
// to task list when prepping for production
gulp.task('watch', function() {
  
  // image changes -- commented out for dev !VA
  // gulp.watch(folder.src + 'img/**/*', ['images']);

  // html changes -- commented out for dev !VA
  // gulp.watch(folder.src + '/**/*', ['html']);

  // javascript changes - commented out for dev !VA
  // gulp.watch(folder.src + 'js/**/*', ['js']);

  // css changes -- not necessary because this is in the browser-sync routine now !VA
  // gulp.watch(folder.src + 'scss/**/*', ['css']);

});

// There are old sourcemap scripts I couldn't get to work when I was
// originally just trying to get something to work -- revisit later

// From https://blog.yipl.com.np/using-gulp-browser-sync-and-source-maps-ef14e0903982
/*
 * Compile files from _scss
 */
// gulp.task('sass', function () {
//   return gulp.src('scss/main.scss')
//       .pipe(sourcemaps.init())
//           .pipe(sass({
//               includePaths: ['css'],
//               onError: browserSync.notify
//           }))
//           .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
//           .pipe(gulp.dest('css'))
//           .pipe(browserSync.reload({stream:true}))
//       .pipe(sourcemaps.write('../maps'))
//       .pipe(gulp.dest('css'));
// });

// From https://gist.github.com/marceloogeda/5a449caa50462ab2667540a93d34009f
// gulp.task('styles', () => {
//   return gulp.src('scss/**/*.scss')
//       .pipe(plugins().sourcemaps.init())
//       .pipe(plugins().sass().on('error', plugins().sass.logError))
//       .pipe(plugins().sourcemaps.write('../maps'))
//       .pipe(gulp.dest('css'))
//       .pipe(browserSync.stream());
// });


// VA! Nov 2019
// gulp.task('compress', function (cb) {
//   pump([
//     gulp.src('build/js/*.js'), 
//     uglify(),
//     gulp.dest('build/js')
//   ],
//   cb
//   );
// });


// Don't know where this is from but works for me now
// VA! Nov 2019
// gulp.task('map', function() {
//   gulp.src('src/scss/style.scss')
//   // .pipe(sourcemaps.init())
//     .pipe(sass())
//     .on('error', function (err) {
//       console.log(err.toString());

//       this.emit('end');
//     })
//     // .pipe(sourcemaps.write('.'))
//   // had a hell of a time figuring out the pattern for writing files
//     .pipe(gulp.dest('src/css'));
// });


// Static Server + watching scss/html files
// VA! NOv 2019
//gulp.task('serve', ['sass'], function() {


gulp.task('serve', gulp.parallel('sass', function() {
  
  browserSync.init({
    server: "./src",
    port: 3200,
    // Port for the browser-sync UI
    ui: {
      port: 3201
    }
    // Might need this... !VA
    // server: {
    //   baseDir: "public" // Change this to your web root dir
    // }
  });
  
        
  // gulp.watch("src/scss/*.scss", ['sass']);
  gulp.watch("src/scss/**/*.scss", ['sass']);

  //enclose multiple file parameters in brackets -- works !VA
  gulp.watch(['src/*.html', 'src/js/*.js']).on('change', browserSync.reload);
  // gulp.watch("").on('change', browserSync.reload); don't need anymore, see above !VA
}));
  
// Compile sass into CSS & auto-inject into browsers

// VA! NOV 2019 Inserting the sourcemaps flag here as per https://fettblog.eu/gulp-4-sourcemaps/
gulp.task('sass', function() {
return gulp.src("src/scss/style.scss",{ sourcemaps: true })
	// VA! NOV 2019 Removing this sourcemaps pipe below for Gulp 4
    //.pipe(sourcemaps.init())
    .pipe(sass())
    // Prevent gulp from abort on error every time a property is replaced with a variable
    // hence preventing an 'undeclared variable' error. Not the most elegant of solutions
    // because it writes an ugly error to the console ever time but it works for now. !VA
    .on('error', function (err) {
      console.log(err.toString());
      this.emit('end');
    })
	// VA! NOV 2019 Also removing this pipe, not sure if it's necessary for Gulp 4
    //.pipe(sourcemaps.write('.'))
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());
});
  
// default task
// gulp.task('default', ['run', 'maps', 'watch', 'serve']);
// gulp.task('default', ['map', 'serve']);
// VA! Nov 2019 Modified as per https://www.liquidlight.co.uk/blog/how-do-i-update-to-gulp-4/
gulp.task('default', gulp.series('serve'));
  
  

