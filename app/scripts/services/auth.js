'use strict';

/**
 * @ngdoc service
 * @name primeApp.Auth
 * @description
 * # Auth
 * Factory in the primeApp.
 */
angular.module('primeApp')
  .factory('Auth', function ($firebaseAuth) {
    return $firebaseAuth();
  });
