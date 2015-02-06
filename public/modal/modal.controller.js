'use strict';

angular.module('ifApp')
  .controller('ModalController', ModalController);

 ModalController.$inject = ['$modalInstance', 'card'];

 function ModalController($modalInstance, card) {

  var vm = this;

  vm.card = card;

  if (typeof vm.card.tags === 'string') {
  	vm.card.tags = [vm.card.tags];
  }
}