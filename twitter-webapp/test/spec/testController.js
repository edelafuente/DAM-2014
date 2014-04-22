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


    describe('Controller module', function(){

        var ctrl;
        var DB;
        var srv;

        beforeEach(function(done){
            require(['controller','data','service'], function(controller,data,service){
                ctrl = controller;
                DB = data;
                srv = service;

                sinon.spy(srv, 'getTweets');
                sinon.spy(DB, 'addTweets');
                done();
            });
        });


        afterEach(function(done){
            DB.addTweets.restore();
            srv.getTweets.restore();
            done();
        });
        it('data and service are under spy', function(done){
            ctrl.getTweetsFromTwitter();
            if(assert.isTrue(srv.getTweets.calledOnce,'getTweets not called')){
                assert.isTrue(DB.addTweets.calledOnce,'addTweets not called');
            }
            done();
        });

    });

        describe('Testing the Controller', function(){
            it('Hello again!', function(){
                console.log('Controller module loaded');
            });
        });
})();
