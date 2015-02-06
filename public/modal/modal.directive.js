'use strict';

angular.module('ifApp')
  .directive('modal', function () {
    return {
      templateUrl: 'modal/modal.detail.html',
      restrict: 'E'
    };
  });