$(function(){

    var noticias =[];
    var indice = 0;
    $tick = $('#ticker');

    var mostrar = function(data, textStatus, jqXHR){

            var hora = new Date();
            var time = hora.toTimeString(hora.getTime());
            $tick.text(time.substr(0,8)+' >> '+ data);
            noticias.push(time.substr(0,8)+' >> '+ data);
            indice++;
            };

    var erroneo = function(jqXHR, textStatus, errorThrown){
                console.log(errorThrown);
            };
    var noticiero = function(e){
        $.ajax({
            url: '../servidor/generaContenidos.php',
            dataType : 'text',
            cache : false,
            success : mostrar,
            error : erroneo
        });
    };

    var intervalID = window.setInterval(noticiero, 1000);

    $(document).on('click', '#detener',function(e){
        if (intervalID > 0) { //parar
            window.clearInterval(intervalID);
            intervalID = 0;
            $('#detener').val('Reanudar');
        }
        else { // reanudar
            intervalID = window.setInterval(noticiero,1000);
            $('#detener').val('Detener');
        }
    });
    $(document).on('click', '#anterior',function(e){
        $tick.text(noticias[--indice]);
    });
    $(document).on('click', '#siguiente',function(e){
        $tick.text(noticias[++indice]);
    });

});