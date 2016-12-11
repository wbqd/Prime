'use strict';

/**
 * @ngdoc function
 * @name primeApp.controller:WelcomeCtrl
 * @description
 * # WelcomeCtrl
 * Controller of the primeApp
 */
angular.module('primeApp')
  .controller('WelcomeCtrl', function ($scope, Pages) {
    $scope.page = Pages.welcome;
  });
