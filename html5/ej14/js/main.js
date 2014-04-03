$(function(){
    'use strict';
    var $area1 = $('#area1');
    var $area2 = $('#area2');

    $area1[0].value = sessionStorage.getItem('contenido');
    $area2[0].value = localStorage.getItem('contenido');
    console.log(localStorage.getItem('contenido'));

    var saveContent1 = function(e){
        sessionStorage.setItem('contenido', this.value);
    };
    var saveContent2 = function(e){
        localStorage.setItem('contenido', this.value);
    };

    function handleStorage(event) {
     event = event || window.event; // support IE8
     if (event.newValue !== $area2[0].value) { // it was removed
        $area2[0].value = localStorage.getItem('contenido');
     } else {
     // Do somthing else
     }
    }


    $(document).on('keyup','#area1', saveContent1);
    $(document).on('keyup','#area2', saveContent2);
    window.addEventListener('storage', handleStorage, false);

});