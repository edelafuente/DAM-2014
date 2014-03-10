muestra = (function(){
    "use strict";

    var muestra = function(){
        var enlace1 = document.querySelectorAll(".enlace1");
        enlace1[0].classList.add("oculto");

        var enlace2 = document.querySelectorAll(".enlace2");
        enlace2[0].classList.remove("oculto");

        var span = document.querySelectorAll(".adicional");
        span[0].classList.remove("oculto");

    };

    return muestra;

})();

oculta = (function(){
    "use strict";

    var oculta = function(){
        var enlace2 = document.querySelectorAll(".enlace2");
        enlace2[0].classList.add("oculto");

        var enlace1 = document.querySelectorAll(".enlace1");
        enlace1[0].classList.remove("oculto");

        var span = document.querySelectorAll(".adicional");
        span[0].classList.add("oculto");
    };

    return oculta;

})();