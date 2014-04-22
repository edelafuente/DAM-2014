/* global describe, it*/

(function () {
    'use strict';

    require.config({
        baseUrl: '../app/scripts',
        paths :{
            'ydn-db' : '../bower_components/ydn-db/jsc/ydn.db-dev'
        },
        shim: {
            'ydn-db': {
                exports: 'ydn'
            }
        }
    });

    describe('Database module', function(){
        var DB;

        beforeEach(function(done){
            require(['data'], function(data){
                DB = data;
                done();
            });
        });
        /*
        describe('something', function(){
            it('moar', function(){
                console.log('Data module loaded');
            });
        });*/

        describe('put method', function (){
            it('add some tweets', function (done){
                DB.putTweet({id:'123456789', text:'I am a tweet, look at me!'},
                    function(key,text){//success
                        console.log(key);
                        console.log(text);
                        done();
                    },
                    function(err){//error
                        console.log(err);
                        throw err;
                    });
                DB.putTweet({id:'987654321', text:'I am another tweet, look at me too!'},
                    function(key,text){//success
                        console.log(key);
                        console.log(text);
                        done();
                    },
                    function(err){//error
                        console.log(err);
                        throw err;
                    });
                DB.putTweet({id:'111111111', text:'I am the last tweet, dont look at me!'},
                    function(key,text){//success
                        console.log(key);
                        console.log(text);
                        done();
                    },
                    function(err){//error
                        console.log(err);
                        throw err;
                    });
                DB.putTweet({id:'000000000', text:'I am a shitty tweet...'},
                    function(key,text){//success
                        console.log(key);
                        console.log(text);
                        done();
                    },
                    function(err){//error
                        console.log(err);
                        throw err;
                    });
            });
        });

        describe('get method', function (){
            it('get a tweet', function (done){
                DB.getTweet('111111111',
                    function(tweet){//success
                        console.log(tweet);
                        done();
                        assert.strictEqual(tweet.id, '111111111');
                    },
                    function(err){//error
                        console.log(err);
                        throw err;
                    });
            });
        });

        describe('get-all method', function (){
            it('get all tweets', function (done){
                DB.getAllTweets(
                    function(tweets){//success
                        console.log(tweets);
                        done();
                        assert.strictEqual(tweets.length, 100);
                    },
                    function(err){//error
                        console.log(err);
                        throw err;
                    });
            });
        });

        describe('remove method', function (){
            it('remove a tweet', function (done){
                DB.removeTweet('000000000',
                    function(removed){//success
                        console.log('Removed '+removed+' tweet');
                        done();
                        assert.strictEqual(removed, 1);
                    },
                    function(err){//error
                        console.log(err);
                        throw err;
                    });
            });
        });

        describe('remove-all method', function (){
            it('remove all tweets', function (done){
                DB.removeAllTweets(
                      function(removes){//success
                        console.log('Removed '+removes+' tweets');
                        done();
                    },
                    function(err){//error
                        console.log(err);
                        throw err;
                    });
            });
        });
    });

})();
