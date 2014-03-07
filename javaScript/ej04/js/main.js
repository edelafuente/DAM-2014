var APP = APP || {};
APP.validarPalin = (function(){
    "use strict";

    var validarPalin = function(cadena){
        var cadena2 = "";
        cadena = cadena.trim().replace(/ /gi, "").toLowerCase();

        for (var i = cadena.length - 1; i >= 0; i--) {
            cadena2[cadena.length - i] = cadena[i];
        }
        console.log(cadena);
        console.log(cadena2);
        return cadena == cadena2;
    };


    return validarPalin;

})();

console.log(APP.validarPalin("abba"));
console.log(APP.validarPalin("abbb"));


