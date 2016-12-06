'use strict';

/**
 * @ngdoc function
 * @name primeApp.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the primeApp
 */
angular.module('primeApp')
  .controller('IndexCtrl', function ($scope, $mdSidenav, sideNavMenu) {
  $scope.menu = sideNavMenu;

  $scope.toggleSidenav = function (menuId) {
    $mdSidenav(menuId).toggle();
  };

});
