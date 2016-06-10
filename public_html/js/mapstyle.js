
/* global google */

function initialize(){
    var latlng = new google.maps.LatLng(34.678070, 135.498857);
    var myOptions = {
        zoom: 16,
        center: latlng,
        scrollwheel: false,
        mapTypeControlOptions: { 
            mapTypeIds: ['sample', google.maps.MapTypeId.ROADMAP] }
        
    };
    var map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);
    
    //アイコン
    var icon = new google.maps.MarkerImage('img/icon_map.png',
            new google.maps.Size(80,92),
            new google.maps.Point(0,0)
            );
    var markerOptions = {
        position : latlng,
        map: map,
        icon: icon,
        title: "D'velt"
    };
    var marker = new google.maps.Marker(markerOptions);
    
    
    //mapスタイル
    var styleOptions = [
        {"featureType":"all","stylers":[
                {"saturation":0},{"hue":"#e7ecf0"}]}
        ,{"featureType":"road","stylers":[{"saturation":-70}]}
        ,{"featureType":"transit","stylers":[{"visibility":"off"}]}
        ,{"featureType":"poi","stylers":[{"visibility":"off"}]}
        ,{"featureType":"water","stylers":[{"visibility":"simplified"}
        ,{"saturation":-60}]}];
    
        
    var styleMapOptions = {name : "D'velt"};
    var type = new google.maps.StyledMapType(styleOptions ,styleMapOptions);
    map.mapTypes.set('sample' , type);
    map.setMapTypeId('sample');
    
    //google.maps.event.addDomListener(window, 'loat', initialize);
}
//google.maps.event.addDomListener(window, 'load', initialize);
