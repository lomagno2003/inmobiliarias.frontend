var myApp = angular.module('myApp');

myApp.controller('DynamicABMController', [ '$scope', '$rootScope', '$routeParams',
	'RepositoryService',
	function($scope, $rootScope, $routeParams, RepositoryService) {
		$scope.fields = [];
	
		$scope.title = $rootScope.globalVariables[$routeParams.repository.concat(".abm.title")];
		
		repositoryService = RepositoryService.getRepository($routeParams.repository);
		
		$scope.resource = RepositoryService.getResource($routeParams.repository,$routeParams.id);
		
		$scope.resource = $scope.resource.get(function(){
			$scope.resource = $scope.resource;

			$scope.element = $scope.resource;
			
			for(var field in repositoryService.viewStructure){
				if(repositoryService.viewStructure[field]['fieldType']=='table'){
					subRepositoryService = RepositoryService.getRepository(
						repositoryService.viewStructure[field]['fieldId']
					);
					
					link = $scope.resource._links[repositoryService.viewStructure[field]['fieldId']].href;
					
					
					
					subResource = RepositoryService.getResourceFromLink(link);
					
					subResource.get(function(resultValue) {
						resultValue = resultValue._embedded[repositoryService.viewStructure[field]['fieldId']];
						columns = [];
						
						for(var column in repositoryService.viewStructure[field]['columns']){
							console.log(column);

							columns.push({
								'columnId':repositoryService.viewStructure[field]['columns'][column]['columnId'],
								'columnName':repositoryService.viewStructure[field]['columns'][column]['columnName'],
							});
						};
						
						rows = [];
						
						for(var row in resultValue){
							console.log(row);
							rowAux = [];
							
							for(var column in repositoryService.viewStructure[field]['columns']){
								columnAux={};
								
								columnAux['columnValue']=resultValue[row][repositoryService.viewStructure[field]['columns'][column]['columnId']];
								
								rowAux.push(columnAux);
							};
							
							rows.push(rowAux);
						}
						
						$scope.fields.push({
							'fieldId':repositoryService.viewStructure[field]['fieldId'],
							'fieldName':repositoryService.viewStructure[field]['fieldName'],
							'fieldType':repositoryService.viewStructure[field]['fieldType'],
							'columns':columns,
							'rows':rows
						});
					});
				} else {
					$scope.fields.push({
						'fieldId':repositoryService.viewStructure[field]['fieldId'],
						'fieldName':repositoryService.viewStructure[field]['fieldName'],
						'fieldType':repositoryService.viewStructure[field]['fieldType']
					});
				}
			};
		});
	}
]);