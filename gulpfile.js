var gulp = require('gulp'),
    log = require('gulp-util').log,
    jade = require('gulp-jade'),
    stylus = require('gulp-stylus'),
    rupture = require('rupture'),
    autoprefixer = require('autoprefixer-stylus'),
    tinypng = require('gulp-tinypng'),
    connect = require('gulp-connect');

var config = {
  watch: './src/**/*.*',
  server: {
    port: '8000',
    path: './dist'
  },
  html: {
    src: './src/index.jade',
    destination: 'dist/'
  },
  views: {
    src: './src/templates/**',
    destination: 'dist/views'
  },
  css: {
    src: './src/styles/style.styl',
    destination: 'dist/css'
  },
  js: {
    src: './src/js/**',
    destination: 'dist/js'
  },
  img: {
    src: './src/img/**/*.*',
    destination: 'dist/images'
  }
};

gulp.task("connect",function(){
  connect.server({
    port:config.server.port,
    livereload:true,
    root:config.server.path});
});

gulp.task('templates', function () {
  gulp.src(config.html.src)
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest(config.html.destination))
    .pipe(connect.reload());
});

gulp.task('views', function () {
  gulp.src(config.views.src)
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest(config.views.destination))
    .pipe(connect.reload());
});

gulp.task('styles', function () {
  gulp.src(config.css.src)
    .pipe(stylus({
      include: ['./node_modules/normalize-styl/','./src/styles/site'],
			'include css': true,
			use: [autoprefixer("iOS >=7","last 1 Chrome version")]
    }))
    .pipe(stylus({
      use: [rupture()]
    }))
    .pipe(gulp.dest(config.css.destination))
    .pipe(connect.reload());
});

gulp.task('scripts', function () {
  gulp.src(config.js.src)
    .pipe(gulp.dest(config.js.destination))
    .pipe(connect.reload());
});

// gulp.task('tinypng', function () {
//   gulp.src(config.img.src)
//     .pipe(tinypng('Jbs3C6V5QJgEVPuoo14tc401QCLBUoYg'))
//     .pipe(gulp.dest(config.img.destination))
//     .pipe(connect.reload());
// });

gulp.task('watch', function () {
  log('Watching file');
  gulp.watch(config.watch, ['build']);
});

gulp.task('build', ['templates','views','styles','scripts']);
gulp.task('default',['build','connect','watch']);
