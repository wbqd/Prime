'use strict';

/**
 * @ngdoc function
 * @name primeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the primeApp
 */
angular.module('primeApp')
  .controller('MainCtrl', function ($scope, Auth) {
    $scope.auth = Auth;

    $scope.signIn = function () {
      $scope.auth.$signInWithEmailAndPassword('prime@handong.edu', 'vmfkdla1!').then(function (firebaseUser) {
        console.log("Signed in as: ", firebaseUser.uid);
      }).catch(function (error) {
        console.error("Authentication failed: ", error);
      });
    };
  });
