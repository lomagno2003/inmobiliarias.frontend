var myApp = angular.module('myApp');

myApp.controller('listViewController', [ '$scope', '$routeParams', '$location',
	'viewDescriptorService','Restangular', 
	function($scope, $routeParams, $location, viewDescriptorService, Restangular) {
	var maxId = 0;
	
	$scope.descriptor = viewDescriptorService.getDescriptor($routeParams.repository);
	
	Restangular.all($routeParams.repository).getList().then(function(elements){
		$scope.rows = [];
		
		var rows = elements;

		_.forEach(rows, function(row){
			if(row.id>maxId){
				maxId = row.id;
			}
			
			var newRow = {};
			
			newRow.href = $routeParams.repository.concat("/").concat(row.id);

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

		$scope.create = function(){
			newElement = {};
			
			idKey = $scope.descriptor.idField;
			
			newElement[idKey] = maxId+1;

			raNewElement = Restangular.all($routeParams.repository.concat('/')).post(newElement).then(function(postedElement){
				path = $routeParams.repository.concat('/').concat(maxId+1);
				$location.path(path);
			});
		};
		
		$scope.selectItem = function(item){
			$location.path(item.href);
		};
	}
]);