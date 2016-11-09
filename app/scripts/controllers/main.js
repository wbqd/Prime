'use strict';

/**
 * @ngdoc function
 * @name primeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the primeApp
 */
angular.module('primeApp')
  .controller('MainCtrl', function ($scope, $mdSidenav, sideNavMenu) {
    $scope.menu = sideNavMenu;

    $scope.toggleSidenav = function (menuId) {
      $mdSidenav(menuId).toggle();
    };
  });
