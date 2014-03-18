$(document).ready(function(){

    var onSlidePrev = function($slideElement, oldIndex, newIndex){
                                console.log('anterior!');
                            };
    var onSlideNext = function($slideElement, oldIndex, newIndex){
                                console.log('siguiente!');
                            };

    var $slide = $('#slideshow').bxSlider({'mode':'fade',
                            'pager': false,
                            'controls': false,
                            'onSlidePrev': onSlidePrev,
                            'onSlideNext': onSlideNext
                        });

$(document).on('click','.prev' ,function(e){
    e.preventDefault();
    var target = this.dataset.target;
    $slide.goToPrevSlide();
    });

$(document).on('click','.next' ,function(e){
    e.preventDefault();
    var target = this.dataset.target;
    $slide.goToNextSlide();
    });


    var afterLoad = function(){
        console.log('imagen fancy');
    };
    var afterClose = function(){
        console.log('imagen normal');
    };

    $(".fancybox").fancybox({
                    'afterLoad' : afterLoad,
                    'afterClose': afterClose
    });

});