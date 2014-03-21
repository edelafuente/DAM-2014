$(function(){
    'use strict';
    //$('#Municipio').focus();
    var convertir = function(data){
        var $list = $('<ul/>', {
                        'id' : 'lista-sugerencias'});
        for (var i in data){
            var $li = $('<li/>', {
                'text' : data[i]});
            $list.append($li);
        }
        return $list;
    };


    var mostrar2 = function(data, textStatus, jqXHR){
                var $div = $('#sugerencias');
                if ($('#Municipio').val().length > 0) {
                    var $lista = convertir(data);
                    $div.text('');
                    $div.append('Coincidencias: <br>');
                    $div.append($lista);
                }
                else{
                    $div.text('');
                }
                if (data.length === 0) {
                    $div.text('No existen coincidencias');
                }
            };
    var arriba = function(){

    };
    var abajo = function(){

    };
    var seleccionar = function(){

    };

    var autocompleta = function(e){
                var $this = $(this);

                if (e.which === 38) {//arriba
                    arriba();
                }
                else if (e.which === 40) {//abajo
                    abajo();
                }
                else if (e.which === 13) {//enter
                    seleccionar();
                }
                else{
                    $.ajax({
                        url: '../servidor/autocompletaMunicipios.php',
                        data: { municipio: $this.val()},
                        dataType : 'json',
                        type: 'POST',
                        cache : false,
                        success : mostrar2,
                        error : erroneo
                    });
                }
            };

    var erroneo = function(jqXHR, textStatus, errorThrown){
                console.log(errorThrown);
            };

        $('#Municipio').on('keyup',autocompleta);


});