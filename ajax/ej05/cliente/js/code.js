$(function(){


    var mostrar = function(data, textStatus, jqXHR){
            if (data.disponible === 'si') {
                $('#disponibilidad').text('El nick: '+$nick.val()+' '+data.disponible+' est\u00e1 disponible.');
            }
            else{
                $('#disponibilidad').text('El nick: '+$nick.val()+' '+data.disponible+' est\u00e1 disponible.' + ' Alternativas: '+ data.alternativas);
            }
            };

    var erroneo = function(jqXHR, textStatus, errorThrown){
                console.log(errorThrown);
            };

    var comprobar = function(e){
        $nick = $('#login');
        e.preventDefault();
        $.ajax({
            url: '../servidor/compruebaDisponibilidadJSON.php',
            data : { login : $nick.val()},
            dataType : 'json',
            type: 'POST',
            cache : false,
            success : mostrar,
            error : erroneo
        });
    };


    $(document).on('click', '#comprobar', comprobar);


});