var myApp = angular.module('myApp');

myApp.controller('selectItemViewController', [ '$scope', '$routeParams', '$location',
	'viewDescriptorService','Restangular', 
	function($scope, $routeParams, $location, viewDescriptorService, Restangular) {
	
	$scope.descriptor = viewDescriptorService.getDescriptor($routeParams.repositoryItem);
	
	Restangular.all($routeParams.repositoryItem).getList().then(function(elements){
		$scope.rows = [];
		
		var rows = elements;

		_.forEach(rows, function(row){			
			var newRow = {};
						
			newRow.href = row._links.self;

			newRow.columns = [];
			
			_.forEach($scope.descriptor.listView.columns, function(column){
				newRow.columns.push({
					'columnId':column.columnId,
					'columnName':column.columnName,
					'columnValue':row[column.columnId]
				});
			});
			$scope.rows.push(newRow);
		});

		});
		
		$scope.selectItem = function(item){
			Restangular.one($routeParams.repository, $routeParams.id).get().then(function(element){
				element[$routeParams.repositoryItem] = item.href.href;
				element.put().then(function(result){
					bootbox.alert("Cambiado");
					path = $routeParams.repository.concat('/').concat($routeParams.id);
					$location.path(path);
				});
			});
		};
	}
]);