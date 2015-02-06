'use strict';

angular.module('ifApp')
  .controller('ModalController', ModalController);

 ModalController.$inject = ['$modalInstance', 'card', 'mapService'];

 function ModalController($modalInstance, card, mapService) {

  var vm = this;

  vm.card = card;

  if (typeof vm.card.tags === 'string') {
  	vm.card.tags = [vm.card.tags];
  }

	mapService.createMap(vm.card.loc.coordinates);
	
}