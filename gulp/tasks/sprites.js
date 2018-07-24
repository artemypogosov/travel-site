var gulp = require('gulp'),
  svgSprite = require('gulp-svg-sprite'),
  rename = require('gulp-rename'),
  del = require('del'),
  svg2png = require('gulp-svg2png');

var config = {
  shape: {
    spacing: {
      padding: 1
    }
  },
  mode: {
    css: {
      // remove .css frome the file name
      variables: {
        replaceSvgWithPng: function () {
          return function (sprite, render) {
            return render(sprite).split('.svg').join('.png');
          }
        }
      },
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

gulp.task('createSprite', ['beginClean'], function () {
  return gulp.src('./app/assets/images/icons/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./app/temp/sprite'));
});

gulp.task('createPngCopy', ['createSprite'], function () {
  return gulp.src('./app/temp/sprite/css/*.svg')
    .pipe(svg2png())
    .pipe(gulp.dest('./app/temp/sprite/css'));
});

gulp.task('newSpriteLocation', ['createPngCopy'], function () {
  return gulp.src([
      './app/temp/sprite/css/**/*.svg',
      './app/temp/sprite/css/**/*.png'
    ])
    .pipe(gulp.dest('./app/assets/images/sprites'))
});


gulp.task('copySpriteCSS', ['newSpriteLocation'], function () {
  return gulp.src('./app/temp/sprite/css/*.css')
    .pipe(rename('_sprite.css'))
    .pipe(gulp.dest('./app/assets/styles/modules'));

})

gulp.task('endClean', ['newSpriteLocation', 'copySpriteCSS'], function () {
  return del(['./app/temp/sprite']);
});

gulp.task('icons', ['beginClean', 'createSprite', 'createPngCopy', 'newSpriteLocation', 'copySpriteCSS', 'endClean']);