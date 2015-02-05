'use strict';

angular.module('ifApp')
	.controller('mainController', mainController);

mainController.$inject = ['dataService'];

function mainController(dataService) {

	var vm = this;

	vm.bubbles = [];
	vm.stacks = [];
	vm.groupByThrees = groupByThrees;
	vm.test = 'angular';

	activate();

	function activate() {
		dataService.get().then(function(result) {
			vm.bubbles = result.data;

			while (vm.bubbles.length) {
				var stack ={
					topCard: vm.bubbles.shift(),
					midCard: vm.bubbles.shift(),
					botCard: vm.bubbles.shift()
				}
				vm.stacks.push(stack)
			}
			console.log(vm.stacks)
		});
	}

	function groupByThrees(index) {
		return index % 3 === 0;
	}

}

