define(['controller','data','events', 'lungo'], function(controller,data,events, Lungo) {
    'use strict';
    console.log('App started');
    Lungo.init({});
    controller.getTweetsFromTwitter();
    //controller.showLatestTweets();
});