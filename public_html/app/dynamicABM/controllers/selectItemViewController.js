define(['app'], function (app) {
	app.register.controller('selectItemViewController', [ '$scope', '$routeParams', '$location',
		'viewDescriptorService','Restangular', 
		function($scope, $routeParams, $location, viewDescriptorService, Restangular) {
		
		$scope.descriptor = viewDescriptorService.getDescriptor($routeParams.repositoryItem);
		
		if(!$scope.descriptor){
			$location.path('/error/not_found');
		}
		
		Restangular.all($routeParams.repositoryItem).getList().then(function(elements){
			$scope.elements = elements;
			
			_.forEach($scope.elements, function(row){						
				row.href = $routeParams.repositoryItem.concat("/").concat(row['id']);
				
				_.forEach($scope.descriptor.listView.columns, function(column){
					if(column.columnType=='manyToOne'){
						foreignFieldId=column.columnId;
	
						Restangular.oneUrl(foreignFieldId,row._links[foreignFieldId].href).get().then(function(result){
							row[column.columnId] = result[column.relationshipDescriptor.fieldId];
						});
					}
				});
			});
	
		});
			
		$scope.selectItem = function(item){
			Restangular.one($routeParams.repository, $routeParams.id).get().then(function(element){
				element[$routeParams.repositoryItem] = item.href;
				element.put().then(function(result){
					bootbox.alert("Cambiado");
					path = $routeParams.repository.concat('/').concat($routeParams.id);
					$location.path(path);
				});
			});
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
		}
	]);
});