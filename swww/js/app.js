// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs).
      // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
      // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
      // useful especially with forms, though we would prefer giving the user a little more room
      // to interact with the app.
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
    });
  })
  .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    console.log(1)
    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js

    $stateProvider
      .state('framework', {
        url: '/framework',
        templateUrl: 'templates/framework.html',
        abstract: true,
        controller: 'FrameworkCtrl'
      })
      .state('framework.home', {
        url: '/home',
        views: {
          'framework': {
            templateUrl: 'templates/home.html',
            controller: 'SndHomePageController'
          }
        }
      })
      .state('framework.chat', {
        url: '/chat',
        views: {
          'framework': {
            templateUrl: 'templates/chat.html',
            controller: 'SndChatPageController'
          }
        }
      })
      .state('framework.chat-single', {
        url: '/chat-single',
        views: {
          'framework': {
            templateUrl: 'templates/chat-single.html',
            controller: 'SndChatSinglePageController'
          }
        }
      })
      .state('framework.drink', {
        url: '/drink',
        views: {
          'framework': {
            templateUrl: 'templates/drink.html',
            controller: 'SndDrinkPageController'
          }
        }
      })
      .state('framework.policy', {
        url: '/policy',
        views: {
          'framework': {
            templateUrl: 'templates/policy.html',
            controller: 'SndPolicyPageController'
          }
        }
      })

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/framework/home');
  })
