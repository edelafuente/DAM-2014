$(function(){
    'use strict';

    var $boxes = $('.box');
    var $width = $(document).width();
    /*$boxes.animate(
        {
            'height' : '50px',
            'width' : '50px',
            'color' : 'yellow',
            'background-color' : 'red',
            'font-size' : '18px',
            'left' : '100%'
        }, 1000, function(){
            console.log('estoy listo!');
        });*/

    $boxes.css({
        'width' : '55px',
        'height' : '55px',
        'color' : 'gray',
        'background-color' : 'pink',
        '-webkit-transform' : 'translateX('+ ($width - 100)+'px)',
        '-webkit-transform-property' : 'all',
        '-webkit-transition-duration' : '3s',
        });

});