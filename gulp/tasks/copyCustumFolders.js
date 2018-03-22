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

let browserify = require("browserify");
let fs = require("fs");

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

gulp.task('copy-custom-folders', function (done) {
    var basedir = 'primo-explore/custom/';
    console.log('copy build custom.css')
    gulp.src(['input/folder/**/*']).pipe(gulp.dest('output/folder'));
        /*create css custom1.css*/

    })
    
    async.parallel(tasks, done);
});




function buildByConcatination() {
    return gulp.src([buildParams.customModulePath(),buildParams.mainPath(),buildParams.customNpmJsPath(),'!'+buildParams.customPath(),'!'+buildParams.customNpmJsModulePath(),'!'+buildParams.customNpmJsCustomPath()])
        .pipe(concat(buildParams.customFile))
        .pipe(babel({
            presets: ['es2015']
        }))
        .on("error", function(err) {
            if (err && err.codeFrame) {
                gutil.log(
                    gutil.colors.red("Browserify error: "),
                    gutil.colors.cyan(err.filename) + ` [${err.loc.line},${err.loc.column}]`,
                    "\r\n" + err.message + "\r\n" + err.codeFrame);
            }
            else {
                gutil.log(err);
            }
            this.emit("end");
        })
        .pipe(wrap('(function(){\n"use strict";\n<%= contents %>\n})();'))
        .pipe(gulp.dest(buildParams.viewJsDir()));
}

function buildByBrowserify() {
    return browserify({
        debug: true,
        entries: buildParams.mainJsPath(),
        paths:[
            buildParams.viewJsDir()+'/node_modules'
        ]
    })
        .transform("babelify",{presets: ["es2015"], plugins: ["transform-html-import-to-string"]})
        .bundle()
        .pipe(fs.createWriteStream(buildParams.customPath()));
}