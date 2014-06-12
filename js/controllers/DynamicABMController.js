var myApp = angular.module('myApp');

myApp.controller('DynamicABMController', [ '$scope', '$rootScope', '$routeParams',
	'RepositoryService',
	function($scope, $rootScope, $routeParams, RepositoryService) {	
		/*	PRIVATE FUNCTION DECLARATIONS */
		var updateTable = function(fieldIndex, resultValue) {
			internalField = $scope.fields[fieldIndex];
			resultValue = resultValue._embedded[internalField['fieldId']];
	
			var columns = [];
	
			for(var column in internalField['columns']){
				columns.push({
					'columnId':internalField['columns'][column]['columnId'],
					'columnName':internalField['columns'][column]['columnName'],
				});
			};
			
			var rows = [];
			
			for(var row in resultValue){
				var rowAux = [];
				
				for(var column in internalField['columns']){
					var columnAux={};
					
					columnAux['columnValue']=resultValue[row][internalField['columns'][column]['columnId']];
					
					rowAux.push(columnAux);
				};
				
				rows.push(rowAux);
			}
			
			$scope.fields[fieldIndex]={
				'fieldId':internalField['fieldId'],
				'fieldName':internalField['fieldName'],
				'fieldType':internalField['fieldType'],
				'columns':columns,
				'rows':rows
			};
		};
		
		var updateReference = function(fieldIndex, resultValue) {			
			referenceField = $scope.fields[fieldIndex]['referenceField'];
			
			$scope.fields[fieldIndex] = {
				'fieldId':$scope.fields[fieldIndex]['fieldId'],
				'fieldName':$scope.fields[fieldIndex]['fieldName'],
				'fieldType':$scope.fields[fieldIndex]['fieldType'],
				'referenceField':{
					'fieldId':referenceField['fieldId'],
					'fieldName':referenceField['fieldName'],
					'fieldType':referenceField['fieldType'],
					'fieldValue':resultValue[referenceField['fieldId']],
					'fieldHRef':'nada'
				}
			};
		};
		/* END OF PRIVATE FUNCTIONS */
		
		
		$scope.fields = [];

		repositoryService = RepositoryService.getRepository($routeParams.repository);
		
		$scope.resource = RepositoryService.getResource($routeParams.repository,$routeParams.id);
		
		$scope.resource = $scope.resource.get(function(){
			$scope.title = repositoryService.viewStructure.title;

			$scope.element = $scope.resource;
			
			$scope.fields = repositoryService.viewStructure.fields;
			
			for(var field in $scope.fields){
				switch($scope.fields[field]['fieldType']){
				case 'table':
					link = $scope.resource._links[$scope.fields[field]['fieldId']].href;
					
					subResource = RepositoryService.getResourceFromLink(link);
					
					$scope.fields[field].resource = subResource.get(function(resultValue) {
						for(var f in $scope.fields){
							if($scope.fields[f].resource == resultValue){
								updateTable(f,resultValue);
							}
						}
					});
					break;
				case 'reference':
					link = $scope.resource._links[$scope.fields[field]['fieldId']].href;

					subResource = RepositoryService.getResourceFromLink(link);

					$scope.fields[field].resource = subResource.get(function(resultValue) {
						for(var f in $scope.fields){
							if($scope.fields[f].resource == resultValue){
								updateReference(f,resultValue);
							}
						}
					});
					break;
				}
			}
		});
	}
]);