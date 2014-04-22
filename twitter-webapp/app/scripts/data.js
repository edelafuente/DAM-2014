define('data',['ydn-db'], function() {
    'use strict';

    var dbname = 'twitterdb';
    var storename = 'tweets';
    var db = new ydn.db.Storage(dbname);


    var putTweet = function(tweet, success, error){

        var req = db.put({name: storename, keyPath: 'id'}, tweet);
        req.done(function(key){
            success(key,tweet.text);
        });
        req.fail(function(e){
            error(e);
        });
    };

    var addTweets = function(tweets, success, error){

        var req = db.add({name: storename, keyPath: 'id'}, tweets);
        req.done(success);
        req.fail(error);
    };

    var getTweet = function(id, success, error){
        var req = db.get(storename, id);
        req.done(function(record){
            success(record);
        });
        req.fail(function(e){
            error(e);
        });
    };

    var getAllTweets = function(success, error){
        var req = db.values(storename);
        req.done(function(records){
            success(records);
        });
        req.fail(function(e){
            error(e);
        });
    };

    var removeTweet = function(id, success, error){
        var req = db.remove(storename, id);
        req.done(function(removed){
            success(removed);
        });
        req.fail(function(e){
            error(e);
        });
    };

    var removeAllTweets = function(success, error){
        var req = db.clear(storename);
        req.done(function(removes){
            success(removes);
        });
        req.fail(function(e){
            error(e);
        });
    };

    return{
        putTweet : putTweet,
        getTweet : getTweet,
        getAllTweets : getAllTweets,
        removeTweet : removeTweet,
        removeAllTweets : removeAllTweets,
        addTweets : addTweets
    };
});