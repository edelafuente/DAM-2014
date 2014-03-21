$(function(){


    var mostrar = function(data, textStatus, jqXHR){
                var $opciones = $('#provincias');
                var opcion;
                for(var i in data) {
                    opcion = new Option(data[i], i);
                    $opciones[0].options.add(opcion);
                }
            };

    var mostrar2 = function(data, textStatus, jqXHR){
                $this = $(this);
                $munis = $('#municipios');
                $munis[0].options.length = 0;
                $.ajax({
                    url: '../servidor/cargaMunicipiosJSON.php',
                    data:{ provincia: $this.val()},
                    dataType : 'json',
                    type: 'POST',
                    cache : false,
                    success : mostrar3,
                    error : erroneo
                });
            };

    var mostrar3 = function(data, textStatus, jqXHR){
                var $opciones = $('#municipios');
                var opcion;
                for(var i in data) {
                    opcion = new Option(data[i], i);
                    $opciones[0].options.add(opcion);
                }
            };

    var erroneo = function(jqXHR, textStatus, errorThrown){
                console.log(errorThrown);
            };
            //llenar las provincias
        var $ajax = $.ajax({
            url: '../servidor/cargaProvinciasJSON.php',
            dataType : 'json',
            type: 'POST',
            cache : false,
            success : mostrar,
            error : erroneo
        });

        $(document).on('change','#provincias',mostrar2);


});