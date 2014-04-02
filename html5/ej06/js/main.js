$(function(){
    'use strict';
var video = document.getElementById('vid');
var $progress = $('progress')[0];

var vPlay = function(){
    video.play();
};

var vPause = function(){
    video.pause();
};

var vStop = function(){
    video.pause();
    video.currentTime = 0;
};

var vFwd = function(){
    video.currentTime+=10;

};

var vRwd = function(){
    video.currentTime-=10;
};

var vStart = function(){
    video.currentTime = 0;
};

var vEnd = function(){
    video.currentTime = video.duration;
};

var vFull = function(){
    if (video.webkitRequestFullScreen) {video.webkitRequestFullScreen();}
    if (video.webkitRequestFullScreen) {video.mozRequestFullScreen();}
    else{video.requestFullScreen();}

};

var vVol = function(e){
    video.volume = this.value/100;

};

var vProgress = function(){
    var percent = Math.floor((100/video.duration)*video.currentTime);
    $progress.value = percent;
    $('#tiempo').text(video.currentTime);

};


    $(document).on('click','#play',vPlay);
    $(document).on('click','#pause',vPause);
    $(document).on('click','#stop',vStop);
    $(document).on('click','#fwd',vFwd);
    $(document).on('click','#rwd',vRwd);
    $(document).on('click','#start',vStart);
    $(document).on('click','#end',vEnd);
    $(document).on('click','#fullscreen',vFull);
    $(document).on('change','#vol',vVol);
    video.ontimeupdate = vProgress;


});