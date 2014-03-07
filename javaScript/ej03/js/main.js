var APP = APP || {};
APP.validarCadena = (function(){
    "use strict";

    var validarMinusculas = function(cadena){
        return cadena === cadena.toLowerCase();
    };

    var validarMayusculas = function(cadena){
        return cadena === cadena.toUpperCase();
    };

    var validarCadena = function(cadena){
        var respuesta;
        if (validarMinusculas(cadena)) {
            respuesta = "contiene minúsculas.";
        }
        else if (validarMayusculas(cadena)) {
            respuesta = "contiene Mayúsculas.";
        }
        else{
            respuesta = "contiene Mayúsculas y minúsculas";
        }
        return respuesta;
    };

    return validarCadena;

})();

console.log(APP.validarCadena("aaaa"));
console.log(APP.validarCadena("BBBB"));
console.log(APP.validarCadena("aBaB"));
console.log(APP.validarCadena("BBBB"));
console.log(APP.validarCadena("aaaa"));


