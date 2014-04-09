var App = App || {};
App.controller = (function() {
    "use strict";

    var iniciarShow = function (e){
        var player = 'John Doe';
        App.data.conseguirJugador(player, function(data){
            var jugador = data;
            App.ui.mostrarComienzo(function(cargado){
                console.log(cargado);
                App.ui.mostrarJuego(jugador);
            });
            
        });
    };

    var mostrarRecords = function (e){

    };

    var mostrarJugador = function (e){
        var player = 'John Doe'; //this.id;
        App.data.conseguirJugador(player, function(data){
            var jugador = data;
            App.ui.mostrarJugador(jugador);
        });
    };

    var hacerEncuesta = function (e){

    };

    return {mostrarJugador : mostrarJugador,
            iniciarShow : iniciarShow,
            mostrarRecords : mostrarRecords,
            hacerEncuesta : hacerEncuesta};

})();