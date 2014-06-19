var myApp = angular.module('myApp');

myApp.controller('listViewController', [ '$scope', '$routeParams', '$location',
	'viewDescriptorService','Restangular', 
	function($scope, $routeParams, $location, viewDescriptorService, Restangular) {
	var maxId = 0;
	
	$scope.descriptor = viewDescriptorService.getDescriptor($routeParams.repository);
	
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
						console.log(column.relationshipDescriptor.fieldId);
						row[column.columnId] = result[column.relationshipDescriptor.fieldId];
					});
				}
			});
		});

		});

		$scope.create = function(){
			newElement = {};
			
			idKey = $scope.descriptor.idField;
			
			newElement[idKey] = maxId+1;
			console.log(maxId+1);
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