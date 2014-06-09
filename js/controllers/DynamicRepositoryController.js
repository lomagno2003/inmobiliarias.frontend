var myApp = angular.module('myApp');

myApp.controller('DynamicRepositoryController', [ '$scope', '$routeParams',
	'RepositoryService', 
	function($scope, $routeParams, RepositoryService) {
		$scope.repository = $routeParams.repository;
		
		repositoryService = RepositoryService.getRepository($routeParams.repository);

		repositoryService.loadElements(function(value) {
			$scope.elements = value;
		});
	} 
]);