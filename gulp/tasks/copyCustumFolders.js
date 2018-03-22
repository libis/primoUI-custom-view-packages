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
var async = require('async');


gulp.task('copy-custom-folders', function (done) {
    //config.setView(options.view);
    var basedir = 'primo-explore/custom/';
    var sourcedir = ''
    var customFolderExp = basedir+'*/';
    glob(customFolderExp, {}, function (er, files) {
        console.log(files);
        for (var i = 0; i < files.length; i++) {
            console.log(files[i]);
            var code = files[i].replace(basedir, '').replace('/', '')
            gulp.src(['../../primo-explore-devenv/'+files[i]+'/**/*']).pipe(gulp.dest(files[i]))
        }
    });
});