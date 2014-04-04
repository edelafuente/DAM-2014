$(function(){
    'use strict';

    //crear tabla
    var db = openDatabase('tweetdb', '1.0', 'All my tweets', 2 * 1024 * 1024);
    db.transaction(function (tx) {
        tx.executeSql('DROP TABLE tweets', []);
        tx.executeSql('DROP TABLE users', []);
        tx.executeSql('CREATE TABLE IF NOT EXISTS tweets(id, user, date, text)', [], ajax1);
        tx.executeSql('CREATE TABLE IF NOT EXISTS users(id, name)', [], ajax2);
    });

    //pedir datos
    var getTweets = function(data) {
        console.log('tweets obtenidos');
        $.each(data, function(index) {
            var tweet = data[index];
            db.transaction(function (tx) {
                tx.executeSql('INSERT INTO tweets (id, user, date, text) VALUES (?, ?, ?, ?)',
                              [tweet.id, tweet.from_user, tweet.time, tweet.text]);
            });
        });
    };

    var getUsers = function(data) {
        console.log('usuarios obtenidos');
        $.each(data, function(index) {
            var user = data[index];
            db.transaction(function (tx) {
                tx.executeSql('INSERT INTO users (id, name) VALUES (?, ?)',
                              [user.id, user.name]);
            });
        });
    };

    var erroneo = function(){
        console.log('error obteniendo tweets');
    };

        //ajax1
    var ajax1 = function(){
        $.ajax({
            url: 'data/tweets.json',
            dataType : 'json',
            type: 'POST',
            cache : false,
            success : getTweets,
            error : erroneo
        });
    };

    var ajax2 = function(){
        //ajax2
        $.ajax({
            url: 'data/users.json',
            dataType : 'json',
            type: 'POST',
            cache : false,
            success : getUsers,
            error : erroneo
        });
    };

    var addTweet = function(tweet1){
        console.log('adding...');
        db.transaction(function (tx) {
            var time = (new Date(Date.parse(tweet1.created_at))).getTime();
            tx.executeSql('INSERT INTO tweets (id, user, date, text) VALUES (?, ?, ?, ?)',
                            [tweet1.id, tweet1.from_user, time / 1000, tweet1.text]);
        });
        //si el usuario no existe, almacenarlo
    };

    var removeTweet = function(tweetid, resultado){
        console.log('removing...');
        db.transaction(function (tx) {
            tx.executeSql('DELETE FROM tweets WHERE id=tweetid',console.log('tweet borrado'));
        });

    };



    //recuperar datos
    var mostrarTweets = function(){
        db.transaction(function (tx) {
            var time = new Date().getTime();
            tx.executeSql('SELECT * FROM tweets WHERE date > ?', [time],
                            function (tx, results) {
                                var html = [], len = results.rows.length;
                                for (var i = 0; i < len; i++) {
                                    html.push('<li>' + results.rows.item(i).text + '</li>');
                                }
                                $('#tweets').append(html.join(''));
            });
        });
    };

    var mostrarUsuarios = function(){
        db.transaction(function (tx) {
            tx.executeSql('SELECT * FROM users',[],
                            function (tx, results) {
                                var html = [], len = results.rows.length;
                                for (var i = 0; i < len; i++) {
                                    html.push('<li>' + results.rows.item(i).name + '</li>');
                                }
                                $('#users').append(html.join(''));
            });
        });
    };

    $(document).on('click','#conseguirT', mostrarTweets);
    $(document).on('click','#conseguirU', mostrarUsuarios);
    $(document).on('click','#anadir', addTweet);
    $(document).on('click','#borrar', removeTweet);

});