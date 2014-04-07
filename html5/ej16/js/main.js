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

        store.transaction.oncomplete = function (){
            getAllTodoItems();
        };

    };

    var update = function(identText, todoText, completion){
        var transaction = db.transaction(["todo-list"], "readwrite");
        var store = transaction.objectStore("todo-list");
        var identNumber = parseInt(identText);

        var data = {
            "text": todoText,
            "timeStamp": identNumber,
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

    var getAllTodoItems = function () {
        var todos = document.getElementById("todoItems");
        todos.innerHTML = "";

        var transaction = db.transaction(["todo-list"]);
        var store = transaction.objectStore("todo-list");

        var cursorRequest = store.openCursor();

        cursorRequest.onsuccess = function(e) {
            var result = e.target.result;
            if(result){

            $('#todoItems').append('<li>'+result.value.text+'<input type="button" value="-" class="borrado" id="'+result.value.timeStamp+'" />'+'</li>');
            result.continue();
            }
        };

        cursorRequest.onerror = onerror;
    };

        var getTasks = function () {
        var todos = document.getElementById("compItems");
        todos.innerHTML = "";

        var transaction = db.transaction(["todo-list"]);
        var store = transaction.objectStore("todo-list");

        var cursorRequest = store.openCursor();

        cursorRequest.onsuccess = function(e) {
            var result = e.target.result;
            if (result){
                if(result.value.completed === 'true'){
                    console.log(result.value.text);
                    $('#compItems').append('<li>'+result.value.text+'</li>');
                }
                result.continue();
            }

        };
    };

    var addTask = function () {
        var todo = document.getElementById("todo");
        if (todo.value.length > 0){
            add(todo.value, 'false');
            todo.value = "";
        }

    };

    var removeTaskByKey = function () {
        var id = document.getElementById("ident");
        if (id.value.length > 0){
            remove(id.value);
            id.value = "";
        }
    };

    var removeTask = function (e) {
        var $ident = this.id;
        remove($ident);
    };

    var updateTask = function () {
        var id = document.getElementById("ident");
        var todo = document.getElementById("todo");
        
        if (id.value.length > 0 && todo.value.length > 0){
            update(id.value, todo.value, 'false');
            todo.value = "";
            id.value = "";
        }
    };

    var init = function () {
        open();
    };

    $(document).on('click','#anadir', addTask);
    $(document).on('click','#quitar', removeTaskByKey);
    $(document).on('click','#cambiar', updateTask);
    $(document).on('click','#conseguirComp', getTasks);
    $(document).on('click','.borrado', removeTask);
    window.addEventListener("DOMContentLoaded", init, false);

});