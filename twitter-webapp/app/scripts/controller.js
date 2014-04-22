define('controller', ['data','service'], function(DB, srv){
    'use strict';

    var processTweets = function(data) {
        var tweets =[];
        var newTweet;

        if (data && data.statuses && data.statuses.length > 0){
            for (var i = data.statuses.length - 1; i >= 0; i--) {
                newTweet ={
                    id : data.statuses[i].id_str,
                    text : data.statuses[i].text,
                    date : new Date(data.statuses[i].created_at),
                    user : data.statuses[i].user.name,
                    image : data.statuses[i].user.user_profile_image_url
                };
                tweets.push(newTweet);
            }
            DB.addTweets(tweets);
        }

    };

    var error = function() {

    };

    var getTweetsFromTwitter = function() {
        srv.getTweets({},processTweets,error);
    };

    return {
        getTweetsFromTwitter : getTweetsFromTwitter
    };
});