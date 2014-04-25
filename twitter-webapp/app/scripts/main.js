require.config({
    paths: {
        'ydn-db': '../bower_components/ydn-db/jsc/ydn.db-dev',
        handlebars: '../bower_components/handlebars.js/dist/handlebars',
        quo: '../bower_components/quojs/quo.debug',
        lungo: '../bower_components/lungo/lungo',
    },
    shim: {
        'ydn-db': {
            exports: 'ydn'
        },
        handlebars:{
            exports: 'Handlebars'
        },
        quo:{
            exports : '$$'
        },
        lungo :{
            deps:['quo'],
            exports : 'Lungo'
        }
    }
});

require(['app'], function (app) {
    'use strict';
    // use app here
    console.log(app);
});
