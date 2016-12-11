'use strict';

/**
 * @ngdoc function
 * @name primeApp.controller:WelcomeCtrl
 * @description
 * # WelcomeCtrl
 * Controller of the primeApp
 */
angular.module('primeApp')
  .controller('WelcomeCtrl', function ($scope, Pages, Auth) {
    $scope.page = Pages.welcome;

    $scope.auth = Auth;
    $scope.currentUser = null;
    $scope.auth.$onAuthStateChanged(function(user) {
      $scope.currentUser = user;
    });
  });
