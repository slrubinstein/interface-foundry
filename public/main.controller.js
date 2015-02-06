'use strict';

angular.module('ifApp')
	.controller('MainController', MainController);

MainController.$inject = ['dataService', 'ModalService', 'bubbleService'];

function MainController(dataService, ModalService, bubbleService) {

	var vm = this;

	vm.bubbles = bubbleService.bubbles;
	vm.filter = filter;
	vm.groupByThrees = groupByThrees;
	vm.modalOpen = false;
	vm.reorder = reorder;
	vm.showDetailModal = showDetailModal;
	vm.stacks = [];

	activate();

	function activate() {
		bubbleService.getBubbles()
			.then(function() {
				vm.bubbles = bubbleService.bubbles;
				vm.stacks = bubbleService.stacks;
			});
	}

	function filter(type) {
		vm.stacks = bubbleService.filterBubbles(type);
	}

	function groupByThrees(index) {
		return index % 3 === 0;
	}

	function reorder(index, card) {
		vm.stacks = bubbleService.reorderBubbles(index, card);
	}

	function showDetailModal(index) {
		ModalService.showModal({
			templateUrl: 'modal/modal.detail.html',
			controller: 'ModalController',
			controllerAs: 'modal',
			inputs: {
				card: bubbleService.stacks[index].topCard
			}
		})
		.then(function(modal) {
			vm.modalOpen = true;
			console.log('modal', modal)
      modal.element.modal();
			modal.close.then(function(result) {
				vm.modalOpen = false;
			});
		});
	}


	vm.show = function() {
		console.log('ctrl bubbles', vm.bubbles)
		console.log('factory bubbles', bubbleService.bubbles)
		console.log('ctrl stacks', vm.stacks)
		console.log('factory stacks', bubbleService.stacks)
	}
}

