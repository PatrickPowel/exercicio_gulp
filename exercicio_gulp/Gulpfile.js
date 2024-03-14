const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

// Tarefa para compilar SASS
gulp.task('sass', function() {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

// Tarefa para comprimir imagens
gulp.task('imagemin', function() {
  return gulp.src('C:/Users/positivo/Desktop/exercicio/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
});

// Tarefa para comprimir JavaScript
gulp.task('uglify', function() {
  return gulp.src('src/js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

// Tarefa padrão para executar todas as tarefas
gulp.task('default', gulp.parallel('sass', 'imagemin', 'uglify'));
