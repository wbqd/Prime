'use strict';

/**
 * @ngdoc function
 * @name primeApp.controller:EditpageCtrl
 * @description
 * # EditpageCtrl
 * Controller of the primeApp
 */
angular.module('primeApp')
  .controller('EditpageCtrl', function ($scope, $mdToast, $document, $location, Pages) {
    $scope.tinymceModel = Pages.welcome;

    $scope.tinymceOptions = {
      plugins: 'link image code',
      toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
    };

    $scope.save = function () {
      $scope.tinymceModel.$save().then(function() {
        $mdToast.show($mdToast.simple()
          .textContent('페이지가 저장되었습니다.')
          .hideDelay(3000)
          .parent($document[0].querySelector('#main')));
        $location.path('/welcome');
      }).catch(function (error) {
        alert('Error!');
      });
    }
  });
