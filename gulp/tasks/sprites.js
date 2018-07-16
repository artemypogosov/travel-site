var gulp      = require('gulp'),
    svgSprite = require('gulp-svg-sprite'),
    rename    = require('gulp-rename'),
    del    = require('del');

var config = {
  mode: {
    css: {
      // remove .css frome the file name
      sprite: 'sprite.svg',
      render: {
        css: {
          template: './gulp/tasks/templates/sprite.css'
        }
      }
    }
  }
}

    gulp.task('beginClean', function () {
      return del(['./app/temp/sprite', './app/images/sprites'])
    });

    gulp.task('createSprite', ['beginClean'], function() {
      return gulp.src('./app/assets/images/icons/**/*.svg')
        .pipe(svgSprite(config))
        .pipe(gulp.dest('./app/temp/sprite'));
    });


    gulp.task('newSpriteLocation', ['createSprite'], function() {
      return gulp.src('./app/temp/sprite/css/**/*.svg')
            .pipe(gulp.dest('./app/assets/images/sprites'))
    });


    gulp.task('copySpriteCSS', ['createSprite'], function () {
      return gulp.src('./app/temp/sprite/css/*.css')
      .pipe(rename('_sprite.css'))
      .pipe(gulp.dest('./app/assets/styles/modules'));

    })

    gulp.task('endClean', ['newSpriteLocation', 'copySpriteCSS'], function () {
      return del(['./app/temp/sprite'])
    });
    gulp.task('icons', ['beginClean', 'createSprite', 'copySpriteCSS' , 'newSpriteLocation', 'endClean']);