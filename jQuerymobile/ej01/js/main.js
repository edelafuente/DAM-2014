$(function(){
    'use strict';

    $.getJSON('data/css-color-names.json', function(json, textStatus) {
        console.log(json);
        var index = 0;
        var digito;
        var letra;
        //a:1,6,11,16,21,26,31,36,41,46,51,56,61,66,71,76,81,86,91,96,101,106,111,116
        //b:2,7,12,17,22,...
        //c:3,8,13,18,23,...
        //d:4,9,14,19,24,...
        //e:5,10,15,20,25,...
        for (var color in json){
        	digito = ++index%10;
        	switch(digito)
        	{
        		case 1: letra = 'a'; break;
        		case 2: letra = 'b'; break;
        		case 3: letra = 'c'; break;
        		case 4: letra = 'd'; break;
        		case 5: letra = 'e'; break;
        		case 6: letra = 'a'; break;
        		case 7: letra = 'b'; break;
        		case 8: letra = 'c'; break;
        		case 9: letra = 'd'; break;
        		case 0: letra = 'e'; break;
        	}
        	console.log(digito+': '+letra);
        	$('#matriz').append('<div id="'+color+'" data-color="'+json[color]+'"'+'style=" background:'+color+' ;"'+' class="caja ui-block-'+letra+'"></div>');
        }
    });

	var mostrarColor = function(e){
		var $this = $(this);
		$('header').html('<h4 class="ui-title">'+this.id+'</h4>');
		$('footer').html('<h4 class="ui-title">'+$this.data('color')+'</h4>');
	};

	$(document).on('tap','.caja',mostrarColor);


});