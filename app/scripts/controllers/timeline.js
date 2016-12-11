'use strict';

/**
 * @ngdoc function
 * @name primeApp.controller:TimelineCtrl
 * @description
 * # TimelineCtrl
 * Controller of the primeApp
 */
angular.module('primeApp')
  .controller('TimelineCtrl', function ($scope, Pages, Auth) {
    $scope.page = Pages.timeline;

    $scope.auth = Auth;
    $scope.currentUser = null;
    $scope.auth.$onAuthStateChanged(function(user) {
      $scope.currentUser = user;
    });
  });
