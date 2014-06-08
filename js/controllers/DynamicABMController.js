var myApp = angular.module('myApp');

myApp.controller('DynamicABMController', [ '$scope', '$rootScope', '$routeParams',
	'RepositoryService',
	function($scope, $rootScope, $routeParams, RepositoryService) {
		$scope.title = $rootScope.globalVariables[$routeParams.repository.concat(".abm.title")];
		
		repositoryService = RepositoryService.getRepository($routeParams.repository);
		
		$scope.fields = [];
		
		repositoryService.loadElement($routeParams.id,function(value) {
			$scope.element = value;
			
			for(var field in repositoryService.viewStructure){
				
				if(repositoryService.viewStructure[field]['fieldType']=='table'){
					subRepositoryService = RepositoryService.getRepository(
						repositoryService.viewStructure[field]['fieldId']
					);
					
					subRepositoryService.loadRepository(function(value) {
						columns = [];
						
						
						for(var column in repositoryService.viewStructure[field]['columns']){
							console.log(column);

							columns.push({
								'columnId':repositoryService.viewStructure[field]['columns'][column]['columnId'],
								'columnName':repositoryService.viewStructure[field]['columns'][column]['columnName'],
							});
						};
						
						rows = [];
						
						for(var row in value){
							console.log(row);
							rowAux = [];
							
							for(var column in repositoryService.viewStructure[field]['columns']){
								columnAux={};
								
								columnAux['columnValue']=value[row][repositoryService.viewStructure[field]['columns'][column]['columnId']];
								
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