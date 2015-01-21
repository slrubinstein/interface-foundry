angular.module('vimeoApp')
	.controller('mainController', mainController);

mainController.$inject = ['$scope', 'dataService'];

function mainController($scope, dataService) {

	var vm = this;

	vm.msg = '';
	vm.search = search;
	vm.videos = {};
	vm.channel = 'staffpicks';

	function search() {
		dataService.get(vm.channel)
			.then(function(response) {
				if (typeof response.data === 'string') {
					vm.msg = 'Not a valid channel';
					vm.videos  =[];
				} else {
					vm.msg = vm.channel + '\'s videos:';
					vm.videos = response.data;
				}
			});
	}
}

