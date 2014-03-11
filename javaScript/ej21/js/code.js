  window.$ = Element.prototype.$ = function(selector){
        var that = (this instanceof Element) ? this : document;
        var elems = that.querySelectorAll(selector);
        return (elems.length === 1) ? elems[0] : elems;
    };

var APP = APP || {};
APP.code = (function(){
    "use strict";


        var form = $("#registro");
        var elementos = form.querySelectorAll('input[data-validator], textarea[data-validator]');


        var validarEmail = function(){
            if(!APP.validador.email(this.value)){
                var error = "falta ";
                error += this.name;

                console.log(error);
                return false;
            }
        };

        var validarRequerido = function(){
            if(!APP.validador.required(this.value)){
                var error = "falta ";
                error += this.name;

                console.log(error);
                return false;
            }
        };

        var validarPassword = function(){
            if(!APP.validador.password(this.value)){
                var error = "falta ";
                error += this.name;

                console.log(error);
                return false;
            }
        };

        var validarMini = function(){
            if(!APP.validador.mini(this.value)){
                var error = "falta ";
                error += this.name;

                console.log(error);
                return false;
            }
        };



        var validarSubmit = function(e){
            for (var i = 1; i <= elementos.length; i++) {
                if (elementos[i].dataset.validator === "required") {
                    if (!validarRequerido()){
                        e.preventDefault();
                    }
                }
                if (elementos[i].dataset.validator === "email") {
                    if (!validarEmail()){
                        preventDefault();
                    }
                }
                if (elementos[i].dataset.validator === "password") {
                    if (!validarPassword()){
                        preventDefault();
                    }
                }
                if (elementos[i].dataset.validator === "min") {
                    if (!validarMini()){
                        preventDefault();
                    }
                }
            }


        };

    for (var i = 0; i < elementos.length; i++) {
        if (elementos[i].dataset.validator === "required") {
            elementos[i].addEventListener("blur", validarRequerido);
        }
        if (elementos[i].dataset.validator === "email") {
            elementos[i].addEventListener("blur", validarEmail);
        }
        if (elementos[i].dataset.validator === "password") {
            elementos[i].addEventListener("blur", validarPassword);
        }
        if (elementos[i].dataset.validator === "min") {
            elementos[i].addEventListener("blur", validarMini);
        }

    }

    form.addEventListener("submit", validarSubmit);


})();