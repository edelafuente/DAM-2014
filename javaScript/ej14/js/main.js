(function(){
    "use strict";
    //número de enlaces
    var enlaces1 = document.getElementsByTagName("a");
    console.log(enlaces1.length);

    var enlaces2 = document.querySelectorAll("a");
    console.log(enlaces2.length);

    console.log(enlaces1);

    // penúltimo enlace

    var penultimo = enlaces1[enlaces1.length-2];

    console.log(penultimo.href);

    // número de enlaces que enlacen a http://prueba

    var count = 0;
    for (var i = enlaces1.length - 1; i >= 0; i--) {
        if (enlaces1[i].href === "http://prueba/")
            count ++;
    }
    console.log(count);

    var enlaces3 = document.querySelectorAll("a[href $='http://prueba']");
    console.log(enlaces3.length);

    //número de enlaces del 3er párrafo
    var enlaces4;
    var parrafos = document.querySelectorAll("body > p");
    if (parrafos.length >= 3){
        enlaces4 = parrafos[2].querySelectorAll("a");
        console.log(enlaces4.length);
    }

})();