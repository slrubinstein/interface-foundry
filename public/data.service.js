'use strict';

angular.module('ifApp')
	.factory('dataService', dataService);

dataService.$inject = ['$http'];

function dataService($http) {
	
	return {
		get: get
	}

	function get() {
		// return $http.get('/bubbles');
		$http.get('/bubbles').success(function(data) { 
			console.log('success data', data)
			return data })
	}
}