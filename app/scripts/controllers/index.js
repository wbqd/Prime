'use strict';

/**
 * @ngdoc function
 * @name primeApp.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the primeApp
 */
angular.module('primeApp')
  .controller('IndexCtrl', function ($scope, $mdSidenav, $mdDialog, $mdToast, $document, Auth) {
    var originatorEv;

    $scope.auth = Auth;
    $scope.currentUser = null;

    $scope.toggleSidenav = function (menuId) {
      $mdSidenav(menuId).toggle();
    };

    $scope.openMenu = function($mdOpenMenu, ev) {
      originatorEv = ev;
      $mdOpenMenu(ev);
    };

    $scope.auth.$onAuthStateChanged(function(user) {
      $scope.currentUser = user;
      if ($scope.currentUser) {
        console.log("Signed in as: ", user.uid);
      } else {
        console.log("Signed out");
      }
    });

    $scope.signIn = function (email, passwd) {
      $scope.auth.$signInWithEmailAndPassword(email, passwd).then(function (user) {
        // console.log("Signed in as: ", user.email);
        $mdToast.show($mdToast.simple()
          .textContent(user.email + ' 계정으로 로그인되었습니다.')
          .hideDelay(3000)
          .parent($document[0].querySelector('#main')));
      }).catch(function (error) {
        console.error("Authentication failed: ", error);
      });
    };

    $scope.signOut = function () {
      $scope.auth.$signOut().then(function () {
        $mdToast.show($mdToast.simple()
          .textContent('로그아웃되었습니다.')
          .hideDelay(3000)
          .parent($document[0].querySelector('#main')));
      })
    };

    $scope.showLoginPrompt = function(ev) {
      $mdDialog.show({
        controller: DialogController,
        templateUrl: 'views/dialog1.tmpl.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true
      })
        .then(function(user) {
          $scope.signIn(user.email, user.password);
        }, function() {

        });
    };

    function DialogController($scope, $mdDialog) {
      $scope.user = null;
      $scope.signIn = function(user) {
        $mdDialog.hide(user);
      };
      $scope.cancel = function () {
        $mdDialog.hide();
      }
    }
  });
