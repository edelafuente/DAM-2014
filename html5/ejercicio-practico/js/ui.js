var App = App || {};
App.ui = (function() {
    "use strict";

    var mostrarInicio = function (){
        $('#inicio').load('views/inicio.html');
    };

    var mostrarJugador = function (jugador){
        $('#inicio').html('Jugador: '+jugador.playerName+'<br>'+'Edad: '+jugador.age+'<br>'+'Descripcion: '+jugador.description+'<br>'+'<img src="'+jugador.photo+'" /><span id="atras" class="btn btn-lg btn-default">Atras</span>');
    };

    var mostrarComienzo = function () {
        $('#inicio').load('views/juego1.html');
    };

    var mostrarJuego = function (jugador){
        console.log(jugador);
        setTimeout(function() {
                    $('#jugador1').html('Jugador: '+jugador.playerName +' Reto 1.');
        var selected = jugador.show[0].selected;
        $('#juego1').html('Opcion 1: '+jugador.show[0].option1.name+'<br>'+'<img src="'+jugador.show[0].option1.photo+'" />'+jugador.show[0].option1.description+' Precio: '+jugador.show[0].option1.price+'€ Likes: '+jugador.show[0].option1.likes+'<span id="option1" class="btn btn-lg btn-default">Opcion 1</span>'+'<br>'+'Opcion 2: '+jugador.show[0].option2.name+'<br>'+'<img src="'+jugador.show[0].option2.photo+'" />'+jugador.show[0].option2.description+' Precio: '+jugador.show[0].option2.price+'€ Likes: '+jugador.show[0].option2.likes+'<span id="option2" class="btn btn-lg btn-default">Opcion 2</span>');

        }, 2000);

    };


    return {mostrarInicio : mostrarInicio,
            mostrarJugador : mostrarJugador,
            mostrarJuego: mostrarJuego,
            mostrarComienzo : mostrarComienzo};

})();