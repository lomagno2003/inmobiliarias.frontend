define(['app',
        'dynamicABM/services/viewDescriptorService',
        'dynamicABM/directives/resourceFormMapper',
        'common/services/jasperConnectorService'
        ], function (app) {
	app.register.controller('detailViewController', [ '$scope', '$rootScope', '$routeParams', '$location',
		'viewDescriptorService','Restangular', 'jasperConnectorService',
		function($scope, $rootScope, $routeParams, $location, viewDescriptorService, Restangular, jasperConnectorService) {
			/**
			 * Variable definitions
			 */
		
			$scope.element = {};
			
			$scope.elementRelationships = {};
			
			/**
			 * Functions definitions
			 */
			$scope.loadData = function(){
				Restangular.one($routeParams.repository, $routeParams.id).get().then(function(element){
					$scope.element = element;
					$scope.elementRelationships = {};
					
					for(var property in element._links){
						if(element._links.hasOwnProperty(property)){
							if(property!='self'){
								$scope.elementRelationships[property]=null;
								Restangular.allUrl(property,$scope.element._links[property].href).getList().then(function(element){
									$scope.elementRelationships[element.route]=element;
									$scope.elementRelationships[element.route].descriptor = viewDescriptorService.getDescriptor(element.route);
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

			$scope.create = function(repository){
				newElement = {};
	
				selfPath = $scope.element._links.self.href;
				
				newElement[$routeParams.repository] = selfPath;
				
				elementDescriptor = viewDescriptorService.getDescriptor(repository);
								
				_.forEach(elementDescriptor.detailView.fields, function(field){
					if(field.fieldDefaultValue){
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

				jasperConnectorService.generateReport("detail".concat($routeParams.repository.substring(0,1).toUpperCase()).concat($routeParams.repository.substring(1)),result);
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