var gulp    = require('gulp'),
postcss = require('gulp-postcss'),
// (autoprefixer -   -webkit-columns: 300px 2; and something like that)
autoprefixer = require('autoprefixer'),
// vars in css file
cssvars      = require('postcss-simple-vars'),
//now we can nest our rules
nested       = require('postcss-nested'),
cssImport    = require('postcss-import'),
mixins    = require('postcss-mixins');

gulp.task('styles', function () {
  // console.log("Imaging Sass or PostCSS task is running here.");
  return gulp.src('./app/assets/styles/styles.css')
  .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
  //чтобы gulp не впадал в панику при ошибке в css и делал вид, что все норм:)
  .on('error', function (errorInfo) {
    //чтобы еще и видеть ошибку
    console.log(errorInfo.toString());
    this.emit('end');
  })
  .pipe(gulp.dest('./app/temp/styles'));
});