var myApp = angular.module('myApp');

myApp.controller('errorViewController', function($scope,$routeParams) {	
		$scope.errorId = $routeParams.errorId;
	}
);