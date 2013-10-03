'use strict';

angular.module('angularFlagsExampleApp')
  .controller('MainCtrl', ['$scope', '$featureFlagsFactory', function ($scope, $featureFlagsFactory) {
    $scope.flags = $featureFlagsFactory;
  }]);
