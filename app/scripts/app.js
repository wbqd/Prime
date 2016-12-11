'use strict';

/**
 * @ngdoc overview
 * @name primeApp
 * @description
 * # primeApp
 *
 * Main module of the application.
 */
angular
  .module('primeApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngMaterial',
    'firebase',
    'ui.tinymce'
  ])
  .run(function ($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function (event, next, previous, error) {
      // We can catch the error thrown when the $requireSignIn promise is rejected
      // and redirect the user back to the home page
      if (error === 'AUTH_REQUIRED') {
        $location.path('/');
      }
    });
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/welcome', {
        templateUrl: 'views/welcome.html',
        controller: 'WelcomeCtrl',
        controllerAs: 'welcome'
      })
      .when('/timeline', {
        templateUrl: 'views/timeline.html',
        controller: 'TimelineCtrl',
        controllerAs: 'timeline'
      })
      .when('/people', {
        templateUrl: 'views/people.html',
        controller: 'PeopleCtrl',
        controllerAs: 'people'
      })
      .when('/map', {
        templateUrl: 'views/map.html',
        controller: 'MapCtrl',
        controllerAs: 'map'
      })
      .when('/schedule', {
        templateUrl: 'views/schedule.html',
        controller: 'ScheduleCtrl',
        controllerAs: 'schedule'
      })
      .when('/notice', {
        templateUrl: 'views/notice.html',
        controller: 'NoticeCtrl',
        controllerAs: 'notice'
      })
      .when('/editpage', {
        templateUrl: 'views/editpage.html',
        controller: 'EditpageCtrl',
        controllerAs: 'editPage',
        resolve: {
          // controller will not be loaded until $requireSignIn resolves
          // Auth refers to our $firebaseAuth wrapper in the factory below
          'currentAuth': ['Auth', function(Auth) {
            // $requireSignIn returns a promise so the resolve waits for it to complete
            // If the promise is rejected, it will throw a $stateChangeError (see above)
            return Auth.$requireSignIn();
          }]
        }
      })
      .when('/timeline/edit', {
        templateUrl: 'views/edittimeline.html',
        controller: 'EdittimelineCtrl',
        controllerAs: 'editTimeline',
        resolve: {
          // controller will not be loaded until $requireSignIn resolves
          // Auth refers to our $firebaseAuth wrapper in the factory below
          'currentAuth': ['Auth', function(Auth) {
            // $requireSignIn returns a promise so the resolve waits for it to complete
            // If the promise is rejected, it will throw a $stateChangeError (see above)
            return Auth.$requireSignIn();
          }]
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('teal')
      .accentPalette('blue')
      .warnPalette('red')
      .backgroundPalette('grey');
  });
