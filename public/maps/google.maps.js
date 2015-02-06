// function initialize() {
//   var mapOptions = {
//     center: { lat: -34.397, lng: 150.644},
//     zoom: 8
//   };
//   var map = new google.maps.Map(document.getElementById('map-canvas'),
//       mapOptions);
// }
// google.maps.event.addDomListener(window, 'load', initialize);

'use strict';

angular.module('ifApp')
	.factory('mapService', mapService);

mapService.$inject = ['$http'];

function mapService($http) {
	
	return {
		activate: activate,
		newMap: newMap
	}

	function activate() {

	  var mapOptions = {
	    zoom: 8,
	    center: new google.maps.LatLng(-34.397, 150.644)
	  };

	  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

	}

	function newMap(coords) {
		coords = [-34.397, 150.644]
		console.log('map', coords)
	  var mapOptions = {
	    center: { lat: coords[0], lng: coords[1]},
	    zoom: 8
	  };
	  var map = new google.maps.Map(document.getElementById('map-canvas'),
	      mapOptions);
	  google.maps.event.trigger(map, 'resize');
		map.setZoom( map.getZoom() );
	}

	function resizeMap() {
   if(typeof map =="undefined") return;
   setTimeout( function(){resizingMap();} , 400);
}

	function resizingMap() {
	   if(typeof map =="undefined") return;
	   var center = map.getCenter();
	   google.maps.event.trigger(map, "resize");
	   map.setCenter(center); 
	}
}