'use strict';

angular.module('angularFlagsExampleApp', ['$featureFlags'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).run(['$featureFlagsFactory', function($featureFlagsFactory) {
    var defaultFlags = [
        {'name': 'ornaments', 'default': 'off'},
        {'name': 'tacos', 'default': 'on'},
        {'name': 'broken heart', 'default': 'off'},
        {'name': 'caulk', 'default': 'on'},
        {'name': 'The French', 'default': 'off'},
        {'name': 'triple grande half-caff latte', 'default': 'on'}
    ];
    $featureFlagsFactory.initialise(defaultFlags);
  }]);
