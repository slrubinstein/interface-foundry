'use strict';

angular.module('ifApp')
  .controller('ModalController', ModalController);

 ModalController.$inject = ['card', 'mapService', '$modalInstance'];

 function ModalController(card, mapService, $modalInstance) {

  var vm = this;

  vm.cancel = cancel;
  vm.card = card;

  if (typeof vm.card.tags === 'string') {
  	vm.card.tags = [vm.card.tags];
  }

	mapService.createMap(vm.card.loc.coordinates);

	function cancel () {
    $modalInstance.dismiss();
  };
}