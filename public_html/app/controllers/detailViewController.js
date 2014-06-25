var myApp = angular.module('myApp');

myApp.controller('detailViewController', [ '$scope', '$rootScope', '$routeParams', '$location',
	'viewDescriptorService','Restangular',
	function($scope, $rootScope, $routeParams, $location, viewDescriptorService, Restangular) {	
		$scope.descriptor = viewDescriptorService.getDescriptor($routeParams.repository);

		if(!$scope.descriptor){
			$location.path('/error/not_found');
		}
		
		$scope.loadData = function(){
			Restangular.one($routeParams.repository, $routeParams.id).get().then(function(element){
				$scope.element = element;
				$scope.elementTables = {};
				
				for(var property in element._links){
					if(element._links.hasOwnProperty(property)){
						if(property!='self'){
							$scope.elementTables[property]=Restangular.allUrl(property,$scope.element._links[property].href).getList();
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
		
		$scope.loadData();
		
		$scope.validRows = function(columns,rows){
			var result = [];
			if(rows){
				rows = rows.$object;

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
			});
		};
		
		$scope.changeReference = function(fieldId){
			path = $routeParams.repository.concat('/').concat($routeParams.id).concat('/').concat(fieldId);
			$location.path(path);
		};
		
		$scope.goTo = function(path){
			$location.path(path);
		};
		
		$scope.create = function(repository){
			newElement = {};

			selfPath = $scope.element._links.self.href;
			
			newElement[$routeParams.repository] = selfPath;
			
			raNewElement = Restangular.all(repository.concat('/')).post(newElement).then(function(postedElement){
				$scope.loadData();
			});
		};
	}
]);