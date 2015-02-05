'use strict';

angular.module('ifApp')
	.controller('ModalController', ModalController);

ModalController.$inject = ['$scope', 'close', 'card'];

function ModalController($scope, close, card) {

	var vm = this;

	vm.card = card;

	$scope.close = function(result) {
		console.log('closing')
 		close(result, 500); // close, but give 500ms for bootstrap to animate
  };
}

