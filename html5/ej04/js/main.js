$(function(){
    'use strict';

    console.log(Modernizr);

    for (var i in Modernizr.inputtypes) {
        if (Modernizr.inputtypes[i]) {
            $('#resultados1').append('- campo '+i+': '+ Modernizr.inputtypes[i]+' <br>');
        }
        else{
            $('#resultados2').append('- campo '+i+': '+ Modernizr.inputtypes[i]+' <br>');
        }
    }

    for (var k in Modernizr.video) {
        if (Modernizr.video[k]) {
            $('#resultados3').append('- campo '+k+': '+ Modernizr.video[k]+' <br>');
        }
    }


});