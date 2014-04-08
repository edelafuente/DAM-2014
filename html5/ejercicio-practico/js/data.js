var App = App || {};
App.data = (function() {
    "use strict";

    window.indexedDB = window.indexedDB || window.mozIndexedDB ||
                    window.webkitIndexedDB || window.msIndexedDB;

    window.IDBTransaction = window.IDBTransaction ||
                    window.webkitIDBTransaction || window.msIDBTransaction;
    window.IDBKeyRange = window.IDBKeyRange ||
                    window.webkitIDBKeyRange || window.msIDBKeyRange;

    var db = null;

    var onerror = function (e) {
        console.log(e);
    };
// abrir base de datos
    var open = function (datos) {
        var version = 4;
        var request = indexedDB.open("game", version);

        request.onupgradeneeded = function(e) {
            db = e.target.result;

            if(db.objectStoreNames.contains('game')){
                db.deleteObjectStore('game');
            }

            var store = db.createObjectStore("game",
                        { keyPath: "playerName" });

        };

        request.onerror = onerror;

        request.onsuccess = function(e) {
            db = e.target.result;
            console.log("DB opened");
            for ( var playr in datos.players){
                console.log(datos.players[playr]);
                add(datos.players[playr]);
            }
        };

    };

// llenar la base de datos

    var add = function (datos) {
        var transaction = db.transaction(["game"], "readwrite");
        var store = transaction.objectStore("game");

        var data = {
            "playerName": datos.player.name,
            "age" : datos.player.age,
            "description" : datos.player.description,
            "photo" : datos.player.photo,
            "show": datos.challenges
        };

        var request = store.put(data);

        request.onsuccess = function(e) {
            console.log("Sucessful add: "+e);
        };

        request.onerror = function(e) {
            console.log("Error adding: ", e);
        };

    };

    var conseguirJSON = function (){
        $.getJSON('data/show.json', function(json2, textStatus) {

            //comprobaciones del json
                console.log(json2);
                console.log(json2.players);
                console.log(json2.players[0]);
                console.log(json2.players[0].player);
                console.log(json2.players[0].player.name);
                console.log(json2.players[0].challenges);
                console.log(json2.players[0].challenges[0]);
                console.log(json2.players[0].challenges[0].selected);
                console.log(json2.players[0].challenges[0].place);
                console.log(json2.players[0].challenges[0].option1);
            //abrir
                open(json2);

            });
    };

    var conseguirJugador = function(name, success) {


            var transaction = db.transaction(["game"]);
            var store = transaction.objectStore("game");
            var singleKeyRange = IDBKeyRange.only(name);
            var cursorRequest = store.openCursor(singleKeyRange);

            cursorRequest.onsuccess = function(e) {
                var result = e.target.result;
                if(result){
                    success(result.value);
                }
            };

            cursorRequest.onerror = onerror;

    };

    return {conseguirJSON : conseguirJSON,
            conseguirJugador : conseguirJugador};

})();