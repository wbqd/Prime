'use strict';

/**
 * @ngdoc function
 * @name primeApp.controller:PeopleCtrl
 * @description
 * # PeopleCtrl
 * Controller of the primeApp
 */
angular.module('primeApp')
  .controller('PeopleCtrl', function ($scope, Pages, Auth) {
    $scope.page = Pages.people;

    $scope.auth = Auth;
    $scope.currentUser = null;
    $scope.auth.$onAuthStateChanged(function(user) {
      $scope.currentUser = user;
    });
  });
