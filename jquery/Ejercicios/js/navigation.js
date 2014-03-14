$(function(){
    'use strict';

    var $nav = $('#nav li');
    $nav.hover(
  function() {
    $(this).addClass('hover').find('ul').show();
  }, function() {
    $(this).removeClass('hover').find('ul').hide();
  }
);



});