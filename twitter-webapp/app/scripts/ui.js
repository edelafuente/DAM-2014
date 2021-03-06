define('ui', ['quo', 'handlebars','lungo'], function($, Handlebars, Lungo){
    'use strict';

    console.log('ui module started');

    var showTweets = function(tweets, success, error){

        var $list = $('#list-tpl').html();
        var template = Handlebars.compile($list);
        var html = template({tweets : tweets});
        $('#tweetlist').html(html);
        //success();
    };

    var showDetails = function(tweet){
    	var $divdet = $('#div-det').html();
    	var template = Handlebars.compile($divdet);
    	var html = template(tweet);
    	$('body').append(html);
    	Lungo.Router.section('tweet-details');
    };

    return {
        showTweets : showTweets,
        showDetails : showDetails
    };
});