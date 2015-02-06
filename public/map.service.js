'use strict';

angular.module('ifApp')
	.factory('mapService', mapService);

mapService.$inject = [];

function mapService() {
	
	return {
		activate: activate,
		createMap: createMap
	};

	function activate() {
		L.mapbox.accessToken = 'pk.eyJ1Ijoic2xydWJpbnN0ZWluIiwiYSI6Im5LZE02b28ifQ.1ypnSdxZd_LH7UbpZeZERA';
	}

	function createMap(coords) {
		setTimeout(function() {
	  	var mapboxTiles = L.tileLayer('https://{s}.tiles.mapbox.com/v4/slrubinstein.l56ffg3p/{z}/{x}/{y}.png?access_token=' + 
	  											L.mapbox.accessToken, {
			    								attribution: '<a href="http://www.mapbox.com/about/maps/" target="_blank">Terms &amp; Feedback</a>'
			});
      var map = L.map('map')
        .addLayer(mapboxTiles)
        .setView([coords[1].toFixed(4), coords[0].toFixed(4)], 15);
	  	L.marker([coords[1].toFixed(4), coords[0].toFixed(4)]).addTo(map);
	  }, 500)
	}
}