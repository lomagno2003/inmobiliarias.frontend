var myApp = angular.module('myApp');

myApp.controller('listViewController', [ '$scope', '$routeParams', '$location',
	'viewDescriptorService','Restangular', 
	function($scope, $routeParams, $location, viewDescriptorService, Restangular) {
	var maxId = 0;
	
	descriptor = viewDescriptorService.getDescriptor($routeParams.repository);

	raElements = Restangular.all($routeParams.repository);

	raElements.getList().then(function(elements){
		$scope.title = descriptor.viewListStructure.title;
		$scope.columns = descriptor.viewListStructure.columns;
		$scope.rows = [];
		
		var rows = elements;

		_.forEach(rows, function(row){
			if(row.id>maxId){
				maxId = row.id;
			}
			var newRow = {};
			
			newRow.href = $routeParams.repository.concat("/").concat(row.id);

			newRow.columns = [];
			
			_.forEach($scope.columns, function(column){
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
			
			idKey = "id".concat($routeParams.repository.substring(0,1).toUpperCase()).concat($routeParams.repository.substring(1));
			newElement[idKey] = maxId+1;
			
			raNewElement = Restangular.all($routeParams.repository.concat('/')).post(newElement).then(function(postedElement){
				path = $routeParams.repository.concat('/').concat(maxId+1);
				$location.path(path);
			});
		};
		
		$scope.goTo = function(path){
			$location.path(path);
		};
	}
]);