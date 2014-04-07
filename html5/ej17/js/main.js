$(function(){
    'use strict';

    var worker = new Worker('js/worker.js');
    var calculatePrime = function () {
        var $valor = $('#numero');
        var numero = parseInt($valor[0].value);
        worker.postMessage({'number': numero});
    };


    worker.addEventListener('message', function(e) {
    $('#resultado').text(e.data);
        }, false);


    $(document).on('click','#boton',calculatePrime);

});