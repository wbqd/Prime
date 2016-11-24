'use strict';

/**
 * @ngdoc service
 * @name primeApp.sideNavMenu
 * @description
 * # sideNavMenu
 * Constant in the primeApp.
 */
angular.module('primeApp')
  .constant('sideNavMenu', [
    {
      url  : '#home',
      title : 'Home',
      icon  : 'home'
    },
    {
      url  : '#schedule',
      title : 'Schedule',
      icon  : 'date_range'
    },
    {
      url  : '#notice',
      title : 'Notice',
      icon  : 'announcement'
    }
  ]);
