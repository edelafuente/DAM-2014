/* global describe, it*/

(function () {
    'use strict';

    require.config({
        baseUrl: '../app/scripts',
        paths :{
            jquery: '../bower_components/jquery/dist/jquery',
            handlebars: '../bower_components/handlebars.js/dist/handlebars',
        },
        shim: {
            handlebars: {
                exports: 'Handlebars'
            }
        }
    });


    describe('Events module', function(){
        var UI;
        var handle;
        var DB;
        var ctrl;
        var $;
        var EVS;

        beforeEach(function(done){
            require(['ui','handlebars', 'controller', 'data', 'jquery', 'events'], function(ui,handlebars, controller, data, jquery, events){
                UI = ui;
                handle = handlebars;
                ctrl = controller;
                DB = data;
                $ = jquery;
                EVS = events;
                sinon.spy(ctrl,'showLatestTweets');
                done();
            });
        });

        afterEach(function(done){
            ctrl.showLatestTweets.restore();

            done();
        });



        it('#Event datachange is fired',function (done){
                var errTimeout = setTimeout(function(){
                    assert(false, 'Event never fired');
                    done();
                }, 1000);

                $(document).on('datachange', function(){
                    clearTimeout(errTimeout);
                    assert(true);
                    done();
                });
                document.dispatchEvent(new Event('datachange'));

            });

    });
})();
