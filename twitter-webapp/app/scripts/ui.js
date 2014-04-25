define('ui', ['quo', 'handlebars'], function($, Handlebars){
    'use strict';

    console.log('ui module started');

    var showTweets = function(tweets, success, error){
        console.log('tweets:');
        console.log(tweets);
        var $list = $('#list-tpl').html();
        var template = Handlebars.compile($list);
        var html = template({tweets : tweets});
        $('#tweetlist').html(html);
        //success();
    };

    return {
        showTweets : showTweets
    };
});