$(function(){
    'use strict';

//javaScript
    $('li[data-delete=true]').remove();
    $('li[data-lang=es]').data('lang','es_ES');
    var elemento = document.querySelectorAll('.user');
    for (var i = 0; i < elemento.length; i++) {
        var data = elemento[i].dataset;
        for (var j in data) {
            $('#resultados1').append(' - '+j+': '+data[j]+'<br>');
        }
        $('#resultados1').append('-----------------<br>');
    }
//jQuery
    $('.user').each(function(){
        var $this = $(this);
        for (var k in $this.data()){
            $('#resultados2').append(' - '+k+': '+$this.data()[k]+'<br>');
        }
        $('#resultados2').append('-----------------<br>');
    });


});