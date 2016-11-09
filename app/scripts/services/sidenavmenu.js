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
      url  : '#dashboard',
      title : 'Dashboard',
      icon  : 'dashboard'
    },
    {
      url  : '#reports',
      title : 'Reports',
      icon  : 'insert_chart'
    },
    {
      url  : '#campaigns',
      title : 'Marketing Campaigns',
      icon  : 'monetization_on'
    },
    {
      url  : '#groups',
      title : 'Customer Groups',
      icon  : 'group_work'
    }
  ]);
