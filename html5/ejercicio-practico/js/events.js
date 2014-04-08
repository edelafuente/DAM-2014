var App = App || {};
App.events = (function() {
    "use strict";

    $(document).on('click','#start',App.controller.iniciarShow);
    $(document).on('click','#consultar',App.controller.mostrarJugador);
    $(document).on('click','.jugador',App.controller.mostrarJugador);
    $(document).on('click','#encuesta',App.controller.hacerEncuesta);
    $(document).on('click','#atras',App.ui.mostrarInicio);


    return {};

})();