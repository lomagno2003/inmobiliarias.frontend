var myApp = angular.module('myApp');

myApp.controller('DynamicABMController', [ '$scope', '$rootScope', '$routeParams',
	'RepositoryService',
	function($scope, $rootScope, $routeParams, RepositoryService) {
		$scope.fields = [];

		repositoryService = RepositoryService.getRepository($routeParams.repository);
		
		$scope.resource = RepositoryService.getResource($routeParams.repository,$routeParams.id);
		
		$scope.resource = $scope.resource.get(function(){
			$scope.resource = $scope.resource;
			$scope.title = repositoryService.viewStructure.title;

			$scope.element = $scope.resource;
			
			fields = repositoryService.viewStructure.fields;
			
			for(var field in fields){
				if(fields[field]['fieldType']=='table'){
					subRepositoryService = RepositoryService.getRepository(
						fields[field]['fieldId']
					);
					
					link = $scope.resource._links[fields[field]['fieldId']].href;
					
					
					
					subResource = RepositoryService.getResourceFromLink(link);
					
					subResource.get(function(resultValue) {
						resultValue = resultValue._embedded[fields[field]['fieldId']];
						columns = [];
						
						for(var column in fields[field]['columns']){
							columns.push({
								'columnId':fields[field]['columns'][column]['columnId'],
								'columnName':fields[field]['columns'][column]['columnName'],
							});
						};
						
						rows = [];
						
						for(var row in resultValue){
							rowAux = [];
							
							for(var column in fields[field]['columns']){
								columnAux={};
								
								columnAux['columnValue']=resultValue[row][fields[field]['columns'][column]['columnId']];
								
								rowAux.push(columnAux);
							};
							
							rows.push(rowAux);
						}
						
						$scope.fields.push({
							'fieldId':fields[field]['fieldId'],
							'fieldName':fields[field]['fieldName'],
							'fieldType':fields[field]['fieldType'],
							'columns':columns,
							'rows':rows
						});
					});
				} else {
					$scope.fields.push({
						'fieldId':fields[field]['fieldId'],
						'fieldName':fields[field]['fieldName'],
						'fieldType':fields[field]['fieldType']
					});
				}
			};
		});
	}
]);