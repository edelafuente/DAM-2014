$(function(){

    $('#recurso').val(window.location);

    var mostrar = function(data, textStatus, jqXHR){

                console.log(jqXHR);
                $('#contenidos').text(data);
                $('#estados').text(jqXHR.state());
                $('#cabeceras').text(jqXHR.getAllResponseHeaders());
                $('#codigo').text(jqXHR.statusText +' '+ jqXHR.status);

            };

    var erroneo = function(jqXHR, textStatus, errorThrown){
                console.log(errorThrown);
            };

    $(document).on('click', '#enviar',function(e){
        var $rec = $('#recurso');
        console.log($rec.val());
        $.ajax({
            url: $rec.val(),
            data : {data : $rec.val()},
            dataType : 'text',
            cache : false,
            success : mostrar,
            error : erroneo
        });
    });
});