angular.module('vimeoApp')
	.factory('dataService', dataService);

dataService.$inject = ['$http'];

function dataService($http) {
	
	return {
		get: get
	}

	function get(channel) {
		return $http.post('/vimeo', {channel: channel})
			.then(function(response) {
				if (typeof response.data === 'string') {
					return {
						msg: ' is not a valid channel',
						videos: []
					}
				} else {
					return {
						msg: '\'s videos:',
						videos: response.data
					}
				}
		});
	}
}