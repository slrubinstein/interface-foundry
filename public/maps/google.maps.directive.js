'use strict';

angular.module('ifApp')
  .directive('gMap', function () {
    return {
      templateUrl: 'maps/google.maps.html',
      restrict: 'E',
      link: function (scope, element, attrs) {
      }
    };
  });