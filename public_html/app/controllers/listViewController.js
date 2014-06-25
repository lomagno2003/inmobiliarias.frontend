var myApp = angular.module('myApp');

myApp.controller('listViewController', [ '$scope', '$routeParams', '$location',
	'viewDescriptorService','Restangular', 
	function($scope, $routeParams, $location, viewDescriptorService, Restangular) {
		$scope.descriptor = viewDescriptorService.getDescriptor($routeParams.repository);
		
		if(!$scope.descriptor){
			$location.path('/error/not_found');
		}
		
		$scope.updateList = function(){
		Restangular.all($routeParams.repository).getList().then(function(elements){
			$scope.elements = elements;
			
			_.forEach($scope.elements, function(row){

							
				row.href = $routeParams.repository.concat("/").concat(row['id']);
				
				_.forEach($scope.descriptor.listView.columns, function(column){
					if(column.columnType=='manyToOne'){
						foreignFieldId=column.columnId;
	
						Restangular.oneUrl(foreignFieldId,row._links[foreignFieldId].href).get().then(function(result){
							row[column.columnId] = result[column.relationshipDescriptor.fieldId];
						});
					}
				});
			});
	
			}, function(errorStatus){
				switch(errorStatus.status){
				case 404:
					$location.path('/error/rest_server_offline');				
					break;
				};
			});
		};
		
		$scope.updateList();

		$scope.create = function(){
			newElement = {};
			
			raNewElement = Restangular.all($routeParams.repository.concat('/')).post(newElement).then(function(data){				
				$scope.updateList();
			});
		};
		
		$scope.selectItem = function(item){
			$location.path(item.href);
		};
	}
]);