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
		var result = dataService.get(vm.channel)
			.then(function(result) {
				vm.msg = vm.channel + result.msg;
				vm.videos = result.videos;
			});
	}
}

