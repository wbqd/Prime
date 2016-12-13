'use strict';

/**
 * @ngdoc function
 * @name primeApp.controller:EdittimelineCtrl
 * @description
 * # EdittimelineCtrl
 * Controller of the primeApp
 */
angular.module('primeApp')
  .controller('EdittimelineCtrl', function ($scope, $mdToast, $document, $location, Pages, editorOption) {
    $scope.tinymceModel = Pages.timeline;

    $scope.tinymceOptions = editorOption;

    $scope.save = function () {
      $scope.tinymceModel.$save().then(function() {
        $mdToast.show($mdToast.simple()
          .textContent('페이지가 저장되었습니다.')
          .hideDelay(3000)
          .parent($document[0].querySelector('#main')));
        $location.path('/timeline');
      }).catch(function (error) {
        $mdToast.show($mdToast.simple()
          .textContent('Error: ' + error)
          .hideDelay(3000)
          .parent($document[0].querySelector('#main')));
      });
    }
  });
