/* global describe, it*/

(function () {
    'use strict';

    require.config({
        baseUrl: '../app/scripts',
        paths :{
            jquery: '../bower_components/jquery/dist/jquery'
        },
        shim: {
            'ydn-db': {
                exports: 'ydn'
            }
        }
    });


    describe('Service module', function(){
        var srv;
        var $;

        beforeEach(function(done){
            require(['service', 'jquery'], function(service, jquery){
                srv = service;
                $ = jquery;
                done();
            });
        });
        describe('Testing the Service', function(){
            it('Hello again!', function(){
                console.log('Service module loaded');
            });
        });

        describe('get method', function (){
            beforeEach(function(done){
                sinon.spy($, 'ajax');
                done();
            });
            afterEach(function(){
                $.ajax.restore();
            });
            it('ajax is under spy', function(done){
                srv.getTweets();
                assert.isTrue($.ajax.calledOnce);
                assert.strictEqual($.ajax.firstCall.args[0].url, '/app/data/tweets.json');
                done();
            });
            it('get all tweets', function (done){
                srv.getTweets({
                    apiKey : ''
                },
                    function(tweets){//success
                        console.log(tweets);
                        if(tweets && tweets.statuses && tweets.statuses.length > 0) {
                            assert.strictEqual(tweets.statuses.length, 100);
                            done();
                        } else{
                            throw 'Tweets no obtenidos';
                        }
                    },
                    function(err){//error
                        console.log(err);
                        throw err;
                    });
            });
        });

    });

})();
