'use strict';

/**
 * @ngdoc function
 * @name primeApp.controller:TimelineCtrl
 * @description
 * # TimelineCtrl
 * Controller of the primeApp
 */
angular.module('primeApp')
  .controller('TimelineCtrl', function ($scope, Pages) {
    $scope.page = Pages.timeline;
  });
