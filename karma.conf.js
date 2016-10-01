// Karma configuration
// Generated on Fri Sep 30 2016 18:27:13 GMT-0500 (Central Daylight Time)
var webpack = require('webpack');

var webpackConfig = require('./webpack.test.config.js');
// webpackConfig.entry = {};

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai'],


    // list of files / patterns to load in the browser
    files: [
      'tests/test_index.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'tests/test_index.js': ['webpack']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      stats: 'errors-only'
    },




    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha'],

     // reporter options 
    mochaReporter: {
        colors: {
        success: 'green',
        info: 'grey',
        warning: 'yellow',
        error: 'red'
      },
      showDiff: true
      // symbols: {
        // success: '+',
        // info: '#',
        // warning: '!',
        // error: 'x'
      // }
    },
     // customContextFile: './karma.html',

    //  customDebugFile: './karma_html/report-summary-filename/index.html',
    // // the default configuration
    // htmlReporter: {
    //   outputDir: 'karma_html', // where to put the reports
    //   templatePath: null, // set if you moved jasmine_template.html
    //   focusOnFailures: true, // reports show failures on start
    //   namedFiles: false, // name files instead of creating sub-directories
    //   pageTitle: null, // page title for reports; browser info by default
    //   urlFriendlyName: false, // simply replaces spaces with _ for files/dirs
    //   reportName: 'report-summary-filename', // report summary filename; browser info by default

    //   // experimental
    //   preserveDescribeNesting: false, // folded suites stay folded
    //   foldAll: false, // reports start folded (only with preserveDescribeNesting)
    // },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    captureTimeout: 60000,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,
    plugins: [
        require('karma-mocha'),
        require('karma-spec-reporter'),
        require('karma-chrome-launcher'),
        require('karma-webpack'),
        require('karma-mocha-reporter'),
        require('karma-chai')
        // require('karma-html-reporter')
    ]
  })
}
