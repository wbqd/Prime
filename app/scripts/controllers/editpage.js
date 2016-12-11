'use strict';

/**
 * @ngdoc function
 * @name primeApp.controller:EditpageCtrl
 * @description
 * # EditpageCtrl
 * Controller of the primeApp
 */
angular.module('primeApp')
  .controller('EditpageCtrl', function ($scope, Pages) {
    $scope.tinymceModel = Pages.welcome;

    $scope.tinymceOptions = {
      plugins: 'link image code',
      toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
    };

    $scope.save = function () {
      $scope.tinymceModel.$save().then(function() {
        alert('Saved!');
      }).catch(function (error) {
        alert('Error!');
      });
    }
  });
