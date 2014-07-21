define(['app',
        'dynamicABM/services/viewDescriptorService',
        'common/services/jasperConnectorService'
        ], function (app) {
	app.register.controller('detailViewController', [ '$scope', '$rootScope', '$routeParams', '$location',
		'viewDescriptorService','Restangular', 'jasperConnectorService',
		function($scope, $rootScope, $routeParams, $location, viewDescriptorService, Restangular, jasperConnectorService) {
			/**
			 * Functions definitions
			 */
		
			$scope.loadData = function(){
				Restangular.one($routeParams.repository, $routeParams.id).get().then(function(element){
					$scope.element = element;
					
					for(var property in element._links){
						if(element._links.hasOwnProperty(property)){
							if(property!='self'){
								$scope.element[property]=Restangular.allUrl(property,$scope.element._links[property].href).getList().then(function(element){
									$scope.element[element.route]=element;
								});
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
				$scope.goTo(path);
			};
			
			$scope.goTo = function(path){
				$location.path(path);
			};
			
			$scope.tableClick = function(field,row){
				if(field.fieldClickeable){
					$location.path(field.fieldId.concat('/').concat(row['id']));
				}
			};
			
			$scope.create = function(repository){
				newElement = {};
	
				selfPath = $scope.element._links.self.href;
				
				newElement[$routeParams.repository] = selfPath;
				
				elementDescriptor = viewDescriptorService.getDescriptor(repository);
								
				_.forEach(elementDescriptor.detailView.fields, function(field){
					if(field.fieldDefaultValue){
						console.log(field.fieldId);
						console.log(field.fieldDefaultValue);
						newElement[field.fieldId] = field.fieldDefaultValue;
					}
				});
				
				raNewElement = Restangular.all(repository.concat('/')).post(newElement).then(function(postedElement){
					$scope.loadData();
				});
			};
			
			$scope.generateReport = function(){				
				var result = {};
				
				_.forEach($scope.descriptor.detailView.fields, function(field){
					console.log("Field ID: ".concat(field.fieldId));
					switch(field.fieldType){
					case "oneToMany":
						result[field.fieldId] = [];
						_.forEach($scope.element[field.fieldId],function(row){
							if(typeof row === 'object'){
								newRow = {};
	
								_.forEach(field.relationshipDescriptor, function(column){
									newRow[column.fieldId] = row[column.fieldId];
								});
								
								result[field.fieldId].push(newRow);
							}
						});
						break;
					case "manyToOne":
						result[field.fieldId] = $scope.element[field.fieldId][0][field.relationshipDescriptor.fieldId];
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
			
			$scope.formatColumn = function(column,row){
				if(row[column.fieldId]){
					if(column.fieldType == 'date'){
						dateObject = new Date(row[column.fieldId]);
						day = dateObject.getDate().toString();
						month = dateObject.getMonth()+1;
						year = dateObject.getFullYear();
						dateFormat = day+'/'+month+'/'+year;
						return dateFormat;
					} else {
						return row[column.fieldId];
					}
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
});