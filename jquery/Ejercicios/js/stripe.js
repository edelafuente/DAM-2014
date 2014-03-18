(function($){

    $.fn.stripe = function(color1, color2){
        var c1 = color1 || '#ccc';
        var c2 = color2 || '#aaa';

        return this.filter('table').each(function(){
            var $this = $(this);

            $this.find('tbody tr:odd').css('background-color',c1);
            $this.find('tbody tr:even').css('background-color',c2);

        });
    };
})(jQuery);

$('table, div').stripe('orchid','wheat');