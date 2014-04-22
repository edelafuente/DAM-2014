define('service', ['jquery'], function($){
    'use strict';

    var getTweets = function(config, success, error) {
        console.log('Version jQuery: '+ $().jquery);
        $.ajax({
            url : '/app/data/tweets.json',
            dataType : 'json',
            success : success,
            error : error
        });
    };

    return {
        getTweets : getTweets
    };
});