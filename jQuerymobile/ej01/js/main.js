$(function(){
    'use strict';

    $.getJSON('data/css-color-names.json', function(json, textStatus) {
        console.log(json);
        var index = 0;
        var a= [1,4,7,10,13,16,19,22,25,28,31,34,37,40,43,46,49,52,55,58,61,64,67,70,73,76,79,82,85,88,91,94,97,100,103,106,109,112,115,118,121,124,127,130,133,136,139,142,145];
        var b= [2,5,8,11,14,17,20,23,26,29,32,35,38,41,44,47,50,53,56,59,62,65,68,71,74,77,80,83,86,89,92,95,98,101,104,107,110,113,116,119,122,125,128,131,134,137,140,143,146];
        var c= [3,6,9,12,15,18,21,24,27,30,33,36,39,42,45,58,51,54,57,60,63,66,69,72,75,78,81,84,87,90,93,96,99,102,105,108,111,114,117,120,123,126,129,132,135,138,141,144,147];
        var letra;
        for (var color in json){
            index++;
            if(a.indexOf(index) > -1){
                letra = 'a';
            }
            if(b.indexOf(index) > -1){
                letra = 'b';
            }
            if(c.indexOf(index) > -1){
                letra = 'c';
            }
            $('#matriz').append('<div id="'+color+'" data-color="'+json[color]+'"'+'style=" background:'+color+' ;"'+' class="caja ui-block-'+letra+'"></div>');
        }
    });

	var mostrarColor = function(e){
		var $this = $(this);
		$('footer').html('<div class="ui-block-a"><h4 class="ui-title">'+this.id+'</h4></div>');
		$('footer').append('<div class="ui-block-b"><h4 class="ui-title">'+$this.data('color')+'</h4></div>');
	};

    var popupColor = function(e){
        var $this = $(this);
        //crear contenido del popup
        var popupContent = '<div data-role="popup" id="popup1"><a href="#" data-rel="back" data-role="button" data-theme="a" data-icon="delete" data-iconpos="notext" class="ui-btn-right">Close</a>';
        popupContent+= '<div id="popupDiv" style=" background:'+this.id+'></div><p>'+this.id+' '+$this.data('color')+'</p>';
        popupContent+='</div>';
        //insertarlo y desencadenar pagecreate
        $('body').append(popupContent).trigger('create');
        //llamar a popup('open')
        $('#popup1').popup();
        $('#popup1').popup('open');
    };

    var nombrado = function(e){
        var pagina = e.currentTarget.documentURI;
        if (pagina.indexOf('pagInf') !== -1){$('footer').html('<h4 class="ui-title">Información</h4>');}
        else if (pagina.indexOf('pagOtr') !== -1){$('footer').html('<h4 class="ui-title">Otros colores</h4>');}

        else{$('footer').html('<h4 class="ui-title">Escoge un color</h4>');}
    };

    var mostrarValor = function(e){
        var $this = $(this);
        $('footer').html('<h4 class="ui-title">'+this.value+'</h4>');
    };

    $(document).on('tap','.caja',mostrarColor);
    $(document).on('taphold','.caja',popupColor);
	$(document).on('pagechange',nombrado);
    $(document).on('change','#picker',mostrarValor);

    $( document ).on( "popupafterclose", ".ui-popup", function() {
        $( this ).remove();
    });


});