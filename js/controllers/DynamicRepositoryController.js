var myApp = angular.module('myApp');

myApp.controller('DynamicRepositoryController', [ '$scope', '$routeParams', '$location',
	'RepositoryService','Restangular', 
	function($scope, $routeParams, $location, RepositoryService, Restangular) {
	var maxId = 0;
	
	repositoryService = RepositoryService.getRepository($routeParams.repository);
	
	raElements = Restangular.all($routeParams.repository);
		
	raElements.getList().then(function(elements){
		console.log(elements);

		$scope.title = repositoryService.viewListStructure.title;
		$scope.columns = repositoryService.viewListStructure.columns;
		$scope.rows = [];
		
		var rows = elements;

		_.forEach(rows, function(row){
			if(row.id>maxId){
				maxId = row.id;
			}
			console.log(row);
			var newRow = {};
			
			newRow.href = "#/".concat($routeParams.repository).concat("/").concat(row.id);

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
			console.log('clicked');
			console.log(maxId);
			raNewElement = Restangular.one($routeParams.repository,maxId+1).put('',{}).then(function(postedElement){
				path = $routeParams.repository.concat('/').concat(maxId+1);
				$location.path(path);
			});
		};
	}
]);