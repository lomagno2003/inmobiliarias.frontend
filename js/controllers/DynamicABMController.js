var myApp = angular.module('myApp');

myApp.controller('DynamicABMController', [ '$scope', '$rootScope', '$routeParams', '$location',
	'RepositoryService','Restangular',
	function($scope, $rootScope, $routeParams, $location, RepositoryService, Restangular) {	
		repositoryService = RepositoryService.getRepository($routeParams.repository);
		
		$scope.fields = repositoryService.viewStructure.fields;
		
		raElement = Restangular.one($routeParams.repository, $routeParams.id);

		raElement.get().then(function(element){
			$scope.element = element;
			$scope.elementTables = {};
			
			for(var property in element._links){
				if(element._links.hasOwnProperty(property)){
					if(property!='self'){
						$scope.elementTables[property]=Restangular.allUrl(property,$scope.element._links[property].href).getList();
						
					}
				}
			}
			
			console.log($scope.elementTables);
		});
		
		$scope.validRows = function(columns,rows){
			var result = [];
			if(rows){
				rows = rows.$object;

				_.forEach(rows, function(row){
					include = true;
					_.forEach(columns, function(column){
						if(!(row.hasOwnProperty(column.columnId))){
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
			console.log($routeParams.repository);
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
			});
		};
		
		$scope.goTo = function(path){
			console.log(path);
			$location.path(path);
		};
		
		$scope.log = function(object){
			console.log(object);
		};
	}
]);