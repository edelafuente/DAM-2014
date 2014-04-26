define(['controller','data','events'], function(controller,data,events) {
    'use strict';
    console.log('App started');
    controller.getTweetsFromTwitter();
    controller.showLatestTweets();
});