'use strict';

/**
 * @ngdoc service
 * @name primeApp.Pages
 * @description
 * # Pages
 * Factory in the primeApp.
 */
angular.module('primeApp')
  .factory('Pages', function ($firebaseObject) {
      // Service logic
      // create a reference to the database node where we will store our data
      var ref = firebase.database().ref('pages');
      return {
        welcome: $firebaseObject(ref.child('welcome')),
        timeline: $firebaseObject(ref.child('timeline')),
        people: $firebaseObject(ref.child('people')),
        map: $firebaseObject(ref.child('map')),
        schedule: $firebaseObject(ref.child('schedule')),
        notice: $firebaseObject(ref.child('notice')),
        about: $firebaseObject(ref.child('about'))
      }
  });
