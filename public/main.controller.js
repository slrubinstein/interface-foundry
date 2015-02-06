'use strict';

angular.module('ifApp')
	.controller('MainController', MainController);

MainController.$inject = ['dataService', 'ModalService', 'bubbleService',
													'$modal'];

function MainController(dataService, ModalService, bubbleService,
												$modal) {

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
		var modalInstance = $modal.open({
			templateUrl: 'modal.detail.html',
			controller: 'ModalController',
			controllerAs: 'modal',
			resolve: {
				card: function() {
					return bubbleService.stacks[index].topCard;
				}
			}
		});

		modalInstance.result.then(function(result) {

		});
	}

// function editNote(listIndex, noteName, noteDescription, noteIndex) {
//     var modalInstance = $modal.open({
//       templateUrl: 'noteModal.html',
//       resolve: {
//         noteData: function() {
//           var noteData = {
//             noteName: noteName || '',
//             noteDescription: noteDescription || '',
//             listIndex: listIndex,
//             noteIndex: noteIndex
//           };
//           return noteData;
//         }
//       },
//       controller: 'ModalCtrl',
//       controllerAs: 'modal',
//     });

//     modalInstance.result.then(function(result) {
//       get();
//     });
//   }






	vm.show = function() {
		console.log('ctrl bubbles', vm.bubbles)
		console.log('factory bubbles', bubbleService.bubbles)
		console.log('ctrl stacks', vm.stacks)
		console.log('factory stacks', bubbleService.stacks)
	}
}

