var myApp = angular.module('myApp');

myApp.controller('consorciosController', [ '$scope','ConsorciosService', function($scope,ConsorciosService) {	
	var consorcios = ConsorciosService.getConsorcios();
	$scope.consorcios = consorcios;
} ]);