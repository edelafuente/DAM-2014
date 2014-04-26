define('events', ['quo','controller'], function($,controller){
    'use strict';


    	$(document).on('datachange',controller.showLatestTweets);
    	$(document).on('click','li',controller.showDetails);
    	$(document).on('singleTap','li',controller.showDetails);


});