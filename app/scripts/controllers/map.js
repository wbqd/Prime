'use strict';

/**
 * @ngdoc function
 * @name primeApp.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller of the primeApp
 */
angular.module('primeApp')
  .controller('MapCtrl', function ($scope, Pages, Auth) {
    $scope.page = Pages.map;

    $scope.auth = Auth;
    $scope.currentUser = null;
    $scope.auth.$onAuthStateChanged(function(user) {
      $scope.currentUser = user;
    });
  });
