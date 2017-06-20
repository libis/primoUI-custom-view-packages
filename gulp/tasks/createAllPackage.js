'use strict';
var gulp = require('gulp');
let glob = require('glob');
let prompt = require('prompt');
let zip = require('gulp-zip');
let concat = require("gulp-concat");
let babel = require('gulp-babel');
let rename = require("gulp-rename");
let debug = require('gulp-debug');
var wrap = require("gulp-wrap");
let runSequence = require('run-sequence');

let config = require('../config.js');
let buildParams = config.buildParams;
var async = require('async');



function removeMatching(originalArray, regex) {
    var j = 0;
    while (j < originalArray.length) {
        if (regex.test(originalArray[j]))
            originalArray.splice(j, 1);
        else
            j++;
    }
    return originalArray;
}

gulp.task('build-all-packages', function (done) {
    var basedir = 'primo-explore/custom/';
    var customFolderExp = basedir+'*/';
    var tasks = []
    glob(customFolderExp, {}, function (er, files) {
        console.log(files);
        /*create js custom.js*/
        console.log('build custom.js')
        for (var i = 0; i < files.length; i++) {
            var code = files[i].replace(basedir, '').replace('/', '')
            config.setView(code);
            tasks.push(function () {

           return gulp.src([buildParams.customModulePath(), buildParams.mainPath(), buildParams.customNpmJsPath(), '!' + buildParams.customPath(), '!' + buildParams.customNpmJsModulePath(), '!' + buildParams.customNpmJsCustomPath()])
               .pipe(concat(buildParams.customFile))
               .pipe(babel({
                   presets: ['es2015']
               }))
               .on('error', (e) => {
                   console.error(e);
                   this.emit('end');
               })
               .pipe(wrap('(function(){\n"use strict";\n<%= contents %>\n})();'))
               .pipe(gulp.dest(buildParams.viewJsDir()));
            }());
        }

        /*create css custom1.css*/
        console.log('build custom.css')
        for (var i = 0; i < files.length; i++) {
            var code = files[i].replace(basedir, '').replace('/', '')
            config.setView(code);
            tasks.push(function () {
                return gulp.src([buildParams.customCssMainPath(), buildParams.customNpmCssPath(), '!' + buildParams.customCssPath()]).pipe(concat(buildParams.customCssFile)).pipe(gulp.dest(buildParams.viewCssDir()));
            }());
        }


        /*create zip*/
        console.log('create .zip')
        for (var i = 0; i < files.length; i++) {
            var code = files[i].replace(basedir, '').replace('/', '')
            config.setView(code);
            tasks.push(function () {
                 return gulp.src(['./primo-explore/custom/' + code, './primo-explore/custom/' + code + '/html/**', './primo-explore/custom/' + code + '/img/**', './primo-explore/custom/' + code + '/css/custom1.css', './primo-explore/custom/' + code + '/js/custom.js'], { base: './primo-explore/custom' }).pipe(zip(code + '.zip')).pipe(gulp.dest('./packages/'));
            }());
        }

    })
    
    async.parallel(tasks, done);
});