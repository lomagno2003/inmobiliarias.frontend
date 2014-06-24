var myApp = angular.module('myApp');

myApp.controller('listViewController', [ '$scope', '$routeParams', '$location',
	'viewDescriptorService','Restangular', 
	function($scope, $routeParams, $location, viewDescriptorService, Restangular) {
	var maxId = 0;
	
	$scope.descriptor = viewDescriptorService.getDescriptor($routeParams.repository);
	
	if(!$scope.descriptor){
		$location.path('/error/not_found');
	}
	
	Restangular.all($routeParams.repository).getList().then(function(elements){
		$scope.elements = elements;
		
		_.forEach($scope.elements, function(row){
			if(row.id>maxId){
				maxId = row.id;
			}
						
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