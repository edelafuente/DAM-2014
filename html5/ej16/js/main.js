$(function(){
    'use strict';

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

    var open = function () {
        var version = 5;
        var request = indexedDB.open("todo-list", version);

        request.onupgradeneeded = function(e) {
            db = e.target.result;

            if(db.objectStoreNames.contains('todo-list')){
                db.deleteObjectStore('todo-list');
            }

            var store = db.createObjectStore("todo-list",
                        { keyPath: "timeStamp" });
            store.createIndex('completed', 'completed', { unique: false });
        };

        request.onerror = onerror;

        request.onsuccess = function(e) {
            db = e.target.result;
            console.log("DB opened");
            getAllTodoItems();

        };
    };

    var add = function (todoText, completion) {
        var transaction = db.transaction(["todo-list"], "readwrite");
        var store = transaction.objectStore("todo-list");

        var data = {
            "text": todoText,
            "timeStamp": new Date().getTime(),
            "completed" : completion
        };

        var request = store.put(data);

        request.onsuccess = function(e) {
            console.log("Sucessful add: "+e);
        };

        request.onerror = function(e) {
            console.log("Error adding: ", e);
        };

        store.transaction.oncomplete = function (){
            getAllTodoItems();
        };
    };

    var remove = function(identText){
        var transaction = db.transaction(["todo-list"], "readwrite");
        var store = transaction.objectStore("todo-list");
        var identNumber = parseInt(identText);

        var request = store.delete(identNumber);

        request.onsuccess = function(e) {
            console.log("Sucessful remove: "+e);
        };

        request.onerror = function(e) {
            console.log("Error removing: ", e);
        };

    };

    var update = function(identText){
        var transaction = db.transaction(["todo-list"], "readwrite");
        var store = transaction.objectStore("todo-list");
        var identNumber = parseInt(identText);

        //var request = store.delete(identNumber);

        request.onsuccess = function(e) {
            console.log("Sucessful update: "+e);
        };

        request.onerror = function(e) {
            console.log("Error updating: ", e);
        };

    };

    var getAllTodoItems = function () {
        var todos = document.getElementById("todoItems");
        todos.innerHTML = "";

        var transaction = db.transaction(["todo-list"]);
        var store = transaction.objectStore("todo-list");

        var cursorRequest = store.openCursor();

        cursorRequest.onsuccess = function(e) {
            var result = e.target.result;
            if(result){

            console.log(result.value.text);
            $('#todoItems').append('<li>'+result.value.text+'</li>');
            result.continue();
            }
        };

        cursorRequest.onerror = onerror;
    };

    var addTask = function () {
        var todo = document.getElementById("todo");
        add(todo.value, 'true');
        todo.value = "";

    };

    var removeTask = function () {
        var id = document.getElementById("ident");
        remove(id.value);
        todo.value = "";
    };

    var updateTask = function () {
        var id = document.getElementById("ident");
        update(id.value);
        todo.value = "";
    };

    var getTasks = function () {
        var todos = document.getElementById("compItems");
        todos.innerHTML = "";

        var transaction = db.transaction(["todo-list"]);
        var store = transaction.objectStore("todo-list");

        var index = store.index('completed');
        var cursorRequest = index.openCursor();

        cursorRequest.onsuccess = function(e) {
            var result = e.target.result;
            if(result.value.completed === 'true'){

            console.log(result.value.text);
            $('#compItems').append('<li>'+result.value.text+'</li>');
            result.continue();
            }

        };
    };

    var init = function () {
        open();
    };

    $(document).on('click','#anadir', addTask);
    $(document).on('click','#quitar', removeTask);
    $(document).on('click','#cambiar', updateTask);
    $(document).on('click','#conseguirComp', getTasks);
    window.addEventListener("DOMContentLoaded", init, false);

});