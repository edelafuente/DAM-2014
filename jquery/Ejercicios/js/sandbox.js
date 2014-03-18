$(function(){
    'use strict';
    ////////3.8.1//////////
    //1
    var $divs = $('div.module');
    console.log($divs);

    //2
    var $li = $('#myList li').eq(2);
    console.log($li[0]);
    $li = $('#myList').find('li').eq(2);
    console.log($li[0]);
    $li = $('#myList li:nth-child(3)');
    console.log($li[0]);
    $li = $('#myListItem');
    console.log($li[0]);

    //3
    var $input = $('input[name=q]');
    var $label = $input.closest('form')
                       .find('label[for="' + $input.attr('name') +'"]');
    console.log($label);

    //4
    var $ocultos = $(':hidden');
    console.log($ocultos);

    //5
    var $img = $('img[alt]');
    console.log($img);

    //6
    //var $filas = $('tbody tr:odd').css('background-color','gray');

    ////////3.8.2//////////

    // 1. alt de todas las imagenes
    $img.each(function() {
        console.log(this.alt );
    });

    // 2. seleccionar input y a su form añadirle una clase
    var $input2 = $('input');
    var $form = $input2.parent('form');
    $form.addClass('nuevaClase');
    console.log($form);

    //3. cambiar el current al siguiente de la lista
    var $li2 = $('#myList li').filter('.current');
    $li2.next().addClass('current');
    $li2.removeClass('current');
    // otra forma
    $('#myList .current').removeClass('current').next().addClass('current');

    //4. seleccionar select dentro de special y dirigirse a su submit
    var $submit = $('#specials select').closest('form').find('input[type=submit]');
    console.log($submit);

    //5. el primer elemento de slideshow, marcarlo como current. resto disabled
    $('#slideshow li:first').addClass('current').siblings().addClass('disabled');

    ////////3.8.3//////////

    //1. añadir 5 elementos al final de #myList
    var $myList = $('#myList');
    var start1, end1;
    start1 = new Date();
    for (var i = 8; i < 14; i++) {
        $myList.append("<li>Elemento" + i + "</li>");
    }
    end1 = new Date();
    console.log(end1-start1);

    var start2, end2;
    var myItems = [], $myList2 = $('#myList');
    start2 = new Date();
    for (var k=14; k<19; k++) {
        myItems.push('<li>Elemento ' + k + '</li>');
    }

    $myList2.append(myItems.join(''));
    end2 = new Date();
    console.log(end2-start2);

    //2. eliminar los elementos impares
    $('#myList li:even').remove();

    //3.
    $('div.module:last')
                .append('<h2>Lorem ipsum</h2>')
                .append('<p>Dolor sit amet</p>');

    //4.
    $('#specials select[day]').append('<option value="wednesday">Wednesday</option>');

    //5.
    var $div2 = $('div.module').last();
    var $newdiv = $('<div/>',{
        'class' : 'module',
        'id' : 'myModule',
        'html' : '<h2>Imagen</h2>¡Este es el párrafo nuevo!'
    });
    $newdiv.append($img.last().clone()).insertAfter($div2);







});