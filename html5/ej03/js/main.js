$(function(){
    'use strict';
    var $progress = $('progress');
    $(document).on('blur','input', function(e){
        var $this = $(this);
        if ($this.val().length > 0) {
            console.log('lleno');
            $progress.val($progress[0].value+1);
        }
    });
});