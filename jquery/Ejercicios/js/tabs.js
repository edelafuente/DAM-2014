$(function(){
    'use strict';

    var $div = $('div.module');
    $div.hide();

    var Items =[];
    $div.each(function(e){
        var $this = $(this);
        var $h2 = $this.find('h2').first().text();
        var $item = $('<li/>',{
        'text' : $h2
        });
        $item.data('tab', $this);
        Items.push($item.get(0));
    });

    var $list = $('<ul/>').addClass('tabs');
    $list.append(Items);
    $list.insertBefore($div.first());

    $(document).on('click','.tabs li',function(e){
        var $this = $(this);
        $this.addClass('current').siblings().removeClass('current');
        $this.data('tab').show().siblings('.module').hide();
    });
    $div.eq(0).show();
    $list.find('li').filter(':first').addClass('current');

});