$(function(){


    var mostrar = function(data, textStatus, jqXHR){
            $('#disponibilidad').text(data);
            };

    var erroneo = function(jqXHR, textStatus, errorThrown){
                console.log(errorThrown);
            };

    var comprobar = function(e){
        $nick = $('#login');
        console.log('prueba');
        e.preventDefault();
        $.ajax({
            url: '../servidor/compruebaDisponibilidad.php',
            data : $nick.val(),
            dataType : 'text',
            cache : false,
            success : mostrar,
            error : erroneo
        });
    };


    $(document).on('click', '#comprobar', comprobar);


});