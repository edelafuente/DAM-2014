var App = App || {};
App.ui = (function() {
    "use strict";

    var mostrarInicio = function (){
        $('#contenedor').load('views/inicio.html');
    };

    var mostrarJugador = function (jugador){
        $('#inicio1').html('Jugador: '+jugador.playerName+'<br>'+'Edad: '+jugador.age+'<br>'+'Descripcion: '+jugador.description+'<br>'+'<img src="'+jugador.photo+'" /><span id="atras" class="btn btn-lg btn-default">Atras</span>');
    };

    var mostrarJuego = function (jugador){
        console.log(jugador);
        var selected = jugador.show[0].selected;

        $('#inicio1').html('Jugador: '+jugador.playerName +' - Reto 1. <br>'+'<img src="'+jugador.photo+'" />');
        $('#inicio2').html('Opcion 1: '+jugador.show[0].option1.name+'<br>'+'<img src="'+jugador.show[0].option1.photo+'" />'+'<br>'+jugador.show[0].option1.description+'<br>'+' Precio: '+jugador.show[0].option1.price+'€ <br> Likes: '+jugador.show[0].option1.likes+'<br>'+'<span id="option1" class="btn btn-lg btn-default">Opcion 1</span>');
        $('#inicio3').html('Opcion 2: '+jugador.show[0].option2.name+'<br>'+'<img src="'+jugador.show[0].option2.photo+'" />'+'<br>'+jugador.show[0].option2.description+'<br>'+' Precio: '+jugador.show[0].option2.price+'€ <br> Likes: '+jugador.show[0].option2.likes+'<br>'+'<span id="option2" class="btn btn-lg btn-default">Opcion 2</span>');

    };


    return {mostrarInicio : mostrarInicio,
            mostrarJugador : mostrarJugador,
            mostrarJuego: mostrarJuego};

})();