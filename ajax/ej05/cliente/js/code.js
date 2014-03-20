$(function(){


    var mostrar = function(data, textStatus, jqXHR){
            if (data.disponible === 'si') {
                $('#disponibilidad').text(data.disponible);
            }
            else{
                $('#disponibilidad').text(data.disponible + ' alternativas: '+ data.alternativas);
            }
            };

    var erroneo = function(jqXHR, textStatus, errorThrown){
                console.log(errorThrown);
            };

    var comprobar = function(e){
        $nick = $('#login');
        console.log('prueba');
        e.preventDefault();
        $.ajax({
            url: '../servidor/compruebaDisponibilidadJSON.php',
            login : $nick.val(),
            dataType : 'json',
            type: 'POST',
            cache : false,
            success : mostrar,
            error : erroneo
        });
    };


    $(document).on('click', '#comprobar', comprobar);


});