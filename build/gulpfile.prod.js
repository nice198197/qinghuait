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
// 基本配置
var Config = require('./gulpfile.config.js');
//======= gulp build 打包资源 ===============
function prod() {
    /** 
     * HTML处理 
     */
    gulp.task('html', function () {
        return gulp.src(Config.html.src).pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest(Config.html.dist));
    });
    /** 
     * assets文件夹下的所有文件处理 
     */
    gulp.task('assets', function () {
        return gulp.src(Config.assets.src).pipe(gulp.dest(Config.assets.dist));
    });
    /** 
     * CSS样式处理 
     */
    gulp.task('css', function () {
        return gulp.src(Config.css.src).pipe(autoprefixer('last 2 version')).pipe(rename({
                suffix: '.min'
            })).pipe(cssnano()) //执行压缩  
            .pipe(gulp.dest(Config.css.dist));
    });
    /** 
     * Stylus样式处理 
     */
    gulp.task('stylus', function () {
        return gulp.src(Config.stylus.src).pipe(stylus()).pipe(gulp.dest(Config.stylus.dist));
    });
    /** 
     * js处理 
     */
    gulp.task('js', function () {
        return gulp.src(Config.js.src).pipe(rename({
            suffix: '.min'
        })).pipe(uglify()).pipe(gulp.dest(Config.js.dist));
    });
    /** 
     * 合并所有js文件并做压缩处理 
     */
    gulp.task('js-concat', function () {
        return gulp.src(Config.js.src).pipe(concat(Config.js.build_name)).pipe(gulp.dest(Config.js.dist)).pipe(rename({
            suffix: '.min'
        })).pipe(uglify()).pipe(gulp.dest(Config.js.dist));
    });
    /** 
     * 图片处理 
     */
    gulp.task('images', function () {
        return gulp.src(Config.img.src).pipe(imagemin({
            optimizationLevel: 3
            , progressive: true
            , interlaced: true
        })).pipe(gulp.dest(Config.img.dist));
    });
    gulp.task('build', ['html', 'css', 'stylus', 'js', 'assets', 'images']);
}
module.exports = prod;