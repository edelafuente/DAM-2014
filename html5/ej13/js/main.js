$(document).ready(function() {
    // Calcular posición
    'use strict';

    var position;
    navigator.geolocation.getCurrentPosition(function (position) {
    //navigator.geolocation.watchPosition(function (position) {
        for( var atrib1 in position){
            if (atrib1 === 'coords'){
                for( var atrib2 in position[atrib1]){
                    $('#datos').append('- '+atrib2+': '+ position[atrib1][atrib2] +'<br>');
                }
            }
        }
        showMap(position);
    });

    function showMap(position) {
        var mapcanvas = document.createElement('div');
        mapcanvas.id = 'mapcanvas';
        mapcanvas.style.height = '400px';
        mapcanvas.style.width = '560px';

        document.querySelector('article').appendChild(mapcanvas);

        var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        var myOptions = {
            zoom: 15,
            center: latlng,
            mapTypeControl: false,
            navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("mapcanvas"), myOptions);

        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: "¡Usted está aquí!"
        });
    }

});