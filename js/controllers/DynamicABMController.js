var myApp = angular.module('myApp');

myApp.controller('DynamicABMController', [ '$scope', '$rootScope', '$routeParams',
	'RepositoryService',
	function($scope, $rootScope, $routeParams, RepositoryService) {
		console.log($routeParams.repository);
		$scope.title = $rootScope.globalVariables[$routeParams.repository.concat(".abm.title")];
		
		repositoryService = RepositoryService.getRepository();
		
		$scope.fields = [];
		
		repositoryService.loadElement($routeParams.id,function(value) {
			$scope.element = value;
			
			for (var property in $scope.element) {
			    if (($scope.element.hasOwnProperty(property))&&(property.indexOf("$") == -1)) {
			    	if(!($scope.element[property] instanceof Object)){
				        $scope.fields.push(
				        	{
				        		'fieldName':property,
				        		'fieldValue':$scope.element[property],
				        		'fieldType':'text'
				        	});
			    	}
			    }
			}
		});
	}
]);