'use strict';

angular.module('ifApp')
	.controller('ModalController', ModalController);

ModalController.$inject = ['$scope', 'close', 'card', 'mapService'];

function ModalController($scope, close, card, mapService) {

	var vm = this;

	vm.card = card;
	

	$scope.close = function(result) {
 		close(result, 500);
  };

  // mapService.newMap(card.loc.coordinates)
}

