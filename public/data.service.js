angular.module('vimeoApp')
	.factory('dataService', dataService);

dataService.$inject = ['$http'];

function dataService($http) {
	
	return {
		get: get
	}

	function get(channel) {
		return $http.post('/vimeo', {channel: channel});
	};
}