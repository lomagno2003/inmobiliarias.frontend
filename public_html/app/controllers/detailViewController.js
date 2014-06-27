var myApp = angular.module('myApp');

myApp.controller('detailViewController', [ '$scope', '$rootScope', '$routeParams', '$location',
	'viewDescriptorService','Restangular', 'jasperConnectorService',
	function($scope, $rootScope, $routeParams, $location, viewDescriptorService, Restangular, jasperConnectorService) {
		/**
		 * Functions definitions
		 */
	
		$scope.loadData = function(){
			Restangular.one($routeParams.repository, $routeParams.id).get().then(function(element){
				$scope.element = element;
				$scope.elementTables = {};
				
				for(var property in element._links){
					if(element._links.hasOwnProperty(property)){
						if(property!='self'){
							$scope.elementTables[property]=Restangular.allUrl(property,$scope.element._links[property].href).getList();
						}
					}
				}
			}, function(errorStatus){
				switch(errorStatus.status){
				case 404:
					$location.path('/error/rest_server_offline');				
					break;
				};
			});
		};
		
		$scope.validRows = function(columns,rows){
			var result = [];
			if(rows){
				rows = rows.$object;

				_.forEach(rows, function(row){
					include = true;
					_.forEach(columns, function(column){
						if(!(row.hasOwnProperty(column.fieldId))){
							include = false;
						}
					});
					
					if(include){
						result.push(row);
					}
				});
			}
			
			return result;
		};
		
		
		$scope.goBack = function(){
			$location.path($routeParams.repository);
		};
		
		$scope.save = function(){
			$scope.element.put().then(function(){
				bootbox.alert("Guardado");
			});
		};
		
		$scope.remove = function(){
			$scope.element.remove().then(function(){
				bootbox.alert("Eliminado");
				$scope.goBack();
			}, function(error){
				switch(error.status){
				case 409:
					bootbox.alert("No se pudo eliminar debido a problemas de dependencias");
					break;
				}
			});
		};
		
		$scope.changeReference = function(fieldId){
			path = $routeParams.repository.concat('/').concat($routeParams.id).concat('/').concat(fieldId);
			$location.path(path);
		};
		
		$scope.goTo = function(path){
			$location.path(path);
		};
		
		$scope.create = function(repository){
			newElement = {};

			selfPath = $scope.element._links.self.href;
			
			newElement[$routeParams.repository] = selfPath;
			
			raNewElement = Restangular.all(repository.concat('/')).post(newElement).then(function(postedElement){
				$scope.loadData();
			});
		};
		
		$scope.generateReport = function(){
			console.log("Getting JSONObject");
			
			var result = {};
			
			_.forEach($scope.descriptor.detailView.fields, function(field){
				console.log("Field ID: ".concat(field.fieldId));
				switch(field.fieldType){
				case "oneToMany":
					result[field.fieldId] = [];
					_.forEach($scope.elementTables[field.fieldId],function(row){
						if(typeof row === 'object'){
							newRow = {};

							_.forEach(field.relationshipDescriptor, function(column){
								newRow[column.fieldId] = row[column.fieldId];
								console.log("Column:".concat(column.fieldId));
								console.log(row[column.fieldId]);
							});
							
							result[field.fieldId].push(newRow);
						}
					});
					break;
				case "manyToOne":
					result[field.fieldId] = $scope.elementTables[field.fieldId].$object[0][field.relationshipDescriptor.fieldId];
					break;
				default:
					result[field.fieldId] = $scope.element[field.fieldId];
					break;
				};
			});
			
			console.log("Result:");
			console.log(result);
			
			jasperConnectorService.generateReport("detail".concat($routeParams.repository.substring(0,1).toUpperCase()).concat($routeParams.repository.substring(1)),result);
		};
		
		$scope.formatColumn = function(column){
			if(column){
				return column;
			} else {
				return "Desconocido";
			}
		};
		
		/**
		 * Initialization
		 */
	
		$scope.descriptor = viewDescriptorService.getDescriptor($routeParams.repository);

		if(!$scope.descriptor){
			$location.path('/error/not_found');
		}
		
		$scope.loadData();
	}
]);