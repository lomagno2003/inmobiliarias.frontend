define(['app'],function(app){
	
	app.register.directive('oneToManyField',function($location){
		return {
			restrict: 'E',
			scope : {
				field: '=field',
				element: '=element',
				elementRelationships: '=elementRelationships'
			},
			templateUrl : 'app/dynamicABM/directives/templates/oneToManyField.html',
			link: function($scope, element, attrs) {
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