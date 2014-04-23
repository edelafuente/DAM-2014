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


    describe('Ui module', function(){
        var UI;
        var handle;
        var DB;
        var ctrl;
        var $;

        beforeEach(function(done){
            require(['ui','handlebars', 'controller', 'data', 'jquery'], function(ui,handlebars, controller, data, jquery){
                UI = ui;
                handle = handlebars;
                ctrl = controller;
                DB = data;
                $ = jquery;
                done();
            });
        });

        it('Children are counted OK', function(done){
            DB.getAllTweets(function(tweets){//success DB
                UI.showTweets(tweets, function(){//success UI
                    assert.equal($('#tweetlist').children().length, 100);
                    done();
                }, function(err){//error UI
                    throw err;
                });
            }, function(err){//error DB
                throw err;
            });

        });

    });
})();
