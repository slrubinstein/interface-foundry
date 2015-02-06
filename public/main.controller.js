'use strict';

angular.module('ifApp')
	.controller('MainController', MainController);

MainController.$inject = ['dataService', 'ModalService', 'mapService'];

function MainController(dataService, ModalService, mapService) {

	var vm = this;

	vm.bubbles = [];
	vm.stacks = [];
	vm.groupByThrees = groupByThrees;
	vm.modalOpen = false;
	vm.reorder = reorder;
	vm.showDetailModal = showDetailModal;

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
		});
		// mapService.activate();
	}

	function groupByThrees(index) {
		return index % 3 === 0;
	}

	function reorder(index, card) {
		var temp = vm.stacks[index].topCard;
		vm.stacks[index].topCard = vm.stacks[index][card];
		vm.stacks[index][card] = temp;
	}

	function showDetailModal(index) {
		ModalService.showModal({
			templateUrl: 'modal/modal.detail.html',
			controller: 'ModalController',
			controllerAs: 'modal',
			inputs: {
				card: vm.stacks[index].topCard
			}
		})
		.then(function(modal) {
			// mapService.newMap(vm.stacks[index].topCard.loc.coordinates)
      modal.element.modal();
			modal.close.then(function(result) {
				// vm.modalOpen = false;
			});
		});
	}
}

