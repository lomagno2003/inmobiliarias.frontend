myApp = angular.module('myApp');

myApp.controller('MenuController', ['$scope', function($scope) {
	  $scope.double = function(value) { return value * 2; };
}]);