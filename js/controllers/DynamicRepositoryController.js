var myApp = angular.module('myApp');

myApp.controller('DynamicRepositoryController', [ '$scope', '$routeParams',
	'RepositoryService', 
	function($scope, $routeParams, RepositoryService) {
	repositoryService = RepositoryService.getRepository($routeParams.repository);
	
	$scope.resource = RepositoryService.getResource($routeParams.repository,$routeParams.id);
	
	$scope.resource = $scope.resource.get(function(){
		$scope.resource = $scope.resource;
		$scope.title = repositoryService.viewListStructure.title;
		$scope.columns = repositoryService.viewListStructure.columns;
		$scope.rows = [];
		
		var rows = $scope.resource._embedded[$routeParams.repository]; 

		for(var row in rows){
			var newRow = [];
			
			for(var column in $scope.columns){
				newRow.push({
					'columnId':$scope.columns[column].columnId,
					'columnName':$scope.columns[column].columnName,
					'columnValue':rows[row][$scope.columns[column].columnId]
				});
			}
			$scope.rows.push(newRow);
		}

		});
	}
]);