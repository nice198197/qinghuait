var gulp = require('gulp');
// html公共部分
var fileinclude  = require('gulp-file-include');
// 处理css中浏览器兼容的前缀  
var autoprefixer = require('gulp-autoprefixer'); 
// 重命名  
var rename = require('gulp-rename'); 
// css的层级压缩合并
var cssnano = require('gulp-cssnano'); 
// stylus编译 
var stylus = require('gulp-stylus');                                                                                                                                                                               
// js压缩  
var uglify = require('gulp-uglify'); 
// 合并文件  
var concat = require('gulp-concat'); 
// 图片压缩 
var imagemin = require('gulp-imagemin');
// 浏览器自动刷新 
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
// 基本配置
var Config = require('./gulpfile.config.js');
// ======= gulp dev 开发环境下 ===============
function dev() {
    /** 
     * HTML处理 
     */
    gulp.task('html:dev', function () {
        return gulp.src(Config.html.src).pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        })).pipe(gulp.dest(Config.html.dist)).pipe(reload({
            stream: true
        }));
    });
    /** 
     * assets文件夹下的所有文件处理 
     */
    gulp.task('assets:dev', function () {
        return gulp.src(Config.assets.src).pipe(gulp.dest(Config.assets.dist)).pipe(reload({
            stream: true
        }));
    });
    /** 
     * CSS样式处理 
     */
    gulp.task('css:dev', function () {
        return gulp.src(Config.css.src).pipe(gulp.dest(Config.css.dist)).pipe(reload({
            stream: true
        }));
    });
    /** 
     * Stylus样式处理 
     */
    gulp.task('stylus:dev', function () {
        return gulp.src(Config.stylus.src).pipe(stylus()).pipe(gulp.dest(Config.stylus.dist)).pipe(reload({
            stream: true
        }));
    });
    /** 
     * js处理 
     */
    gulp.task('js:dev', function () {
        return gulp.src(Config.js.src).pipe(gulp.dest(Config.js.dist)).pipe(reload({
            stream: true
        }));
    });
    /** 
     * 图片处理 
     */
    gulp.task('images:dev', function () {
        return gulp.src(Config.img.src).pipe(imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        })).pipe(gulp.dest(Config.img.dist)).pipe(reload({
            stream: true
        }));
    });
    gulp.task('dev', ['html:dev', 'css:dev', 'stylus:dev', 'js:dev', 'assets:dev', 'images:dev'], function () {
        browserSync.init({
            proxy: '192.168.0.1',
            serveStatic: [Config.dist],         
            notify: false
        });
        // Watch .html files 
        gulp.watch(Config.html.layout, ['html:dev']); 
        gulp.watch(Config.html.src, ['html:dev']);
        // Watch .css files  
        gulp.watch(Config.css.src, ['css:dev']);
        // Watch .stylus files  
        gulp.watch(Config.stylus.src, ['stylus:dev']);
        // Watch assets files  
        gulp.watch(Config.assets.src, ['assets:dev']);
        // Watch .js files  
        gulp.watch(Config.js.src, ['js:dev']);
        // Watch images files  
        gulp.watch(Config.img.src, ['images:dev']);
    });
}
//======= gulp dev 开发环境下 ===============
module.exports = dev;