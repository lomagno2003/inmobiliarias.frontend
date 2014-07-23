define(['app',
        'dynamicABM/directives/resourceFormMapper',
        'dynamicABM/services/viewDescriptorService'],
        function(app){
	
	app.register.directive('oneToManyField',function($location,viewDescriptorService,Restangular){
		return {
			restrict: 'E',
			scope : {
				field: '=field',
				element: '=element',
				elementRelationships: '=elementRelationships'
			},
			templateUrl : 'app/dynamicABM/directives/templates/oneToManyField.html',
			link: function($scope, element, attrs) {
				$scope.onButtonClick = function(){
					$scope.relationshipDescriptor = viewDescriptorService.getDescriptor($scope.field.fieldId);
					
					$scope.newElement = {};
					console.info($scope.element);
					$scope.newElement[$scope.element.route] = $scope.element._links.self.href;
					$scope.newElementRelationships = {};
					$scope.newElementRelationships[$scope.element.route] = [$scope.element];
				};
				
				$scope.save = function(){
					Restangular.all($scope.field.fieldId.concat('/')).post($scope.newElement).then(function(postedElement){
						bootbox.alert("Guardado");
					});
				};
				
				$scope.remove = function(element){
					element.remove().then(function(){
						bootbox.alert("Eliminado");
					}, function(error){
						switch(error.status){
						case 409:
							bootbox.alert("No se pudo eliminar debido a problemas de dependencias");
							break;
						}
					});
				};
				
			    $scope.validRows = function(){
			    	var result = [];
			    	if($scope.element&&$scope.elementRelationships){
			    		columns = $scope.field.relationshipDescriptor;
				    	var rows = null;
				    	
				    	if(!$scope.field.fieldInRequest){
				    		rows = $scope.elementRelationships[$scope.field.fieldId];
				    	} else {
				    		rows = $scope.element[$scope.field.fieldId];
				    	}

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
			    	 }
					
					return result;
				}
			     
				$scope.formatColumn = function(column,row){
					if(row){
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
					}
				};
				
				$scope.selectAction = function(field,row){
					if(field.fieldClickeable){
						$location.path(field.fieldId.concat('/').concat(row['id']));
					}
				};
			}
		}
	});
});