'use strict';

/**
 * @ngdoc function
 * @name primeApp.controller:EditpeopleCtrl
 * @description
 * # EditpeopleCtrl
 * Controller of the primeApp
 */
angular.module('primeApp')
  .controller('EditpeopleCtrl', function ($scope, $mdToast, $document, $location, Pages, editorOption) {
    $scope.tinymceModel = Pages.people;

    $scope.tinymceOptions = editorOption;

    $scope.save = function () {
      $scope.tinymceModel.$save().then(function() {
        $mdToast.show($mdToast.simple()
          .textContent('페이지가 저장되었습니다.')
          .hideDelay(3000)
          .parent($document[0].querySelector('#main')));
        $location.path('/people');
      }).catch(function (error) {
        $mdToast.show($mdToast.simple()
          .textContent('Error: ' + error)
          .hideDelay(3000)
          .parent($document[0].querySelector('#main')));
      });
    }
  });
