var gulp = require('gulp')
var nodemon = require('gulp-nodemon')

gulp.task('dev', function () {
  nodemon({
    script: 'server.js',
    ext: 'js',
    env: {
      'BADGEIT_FRONT_PORT': 8080,
      'BADGEIT_FRONT_HOST': 'localhost'
    }
  })
})
