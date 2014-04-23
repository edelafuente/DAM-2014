define('ui', ['jquery'], function(){
    'use strict';

    console.log('ui module started');

    var showTeets = function(){
        var $list = $('#tweetlist');
    };

    return {
        showTeets : showTeets
    };
});