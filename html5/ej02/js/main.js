$(function(){
    'use strict';
document.designMode = 'On';

var negrita = function(e){
    console.log('negrita');
    document.execCommand('bold', false, null);
};
var italica = function(e){
    console.log('italica');
    document.execCommand('italic', false, null);
};
var subrayado = function(e){
    console.log('subrayado');
    document.execCommand('underline', false, null);
};

$(document).on('click','#negrita', negrita);
$(document).on('click','#italica', italica);
$(document).on('click','#subrayado', subrayado);

});