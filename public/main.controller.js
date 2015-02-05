angular.module('ifApp')
	.controller('mainController', mainController);

mainController.$inject = ['$scope', 'dataService'];

function mainController($scope, dataService) {

	var vm = this;

	vm.bubbles = [];
	vm.test = 'angular'

	activate();

	function activate() {
		dataService.get().then(function(result) {
			vm.bubbles = result.data;
		});
	}

}

