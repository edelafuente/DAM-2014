$(function(){
    'use strict';
    var $input = $('input[name=q]');
    var $label = $input.closest('form')
                       .find('label[for="' + $input.attr('name') +'"]');
    console.log($label.text());
    $input.val($label.text()).addClass('hint');
    $label.hide();

    $(document).on('keypress','input[name=q]' ,function(e){
            if ($input.val() === $label.text()) {
            $input.removeClass('hint').val('');
            }
    });
    $(document).on('blur','input[name=q]' ,function(e){
            if ($input.val().trim() === '') {
            $input.addClass('hint').val($label.text());
            }
    });




});