define(['app'],function(app){
	
	app.register.directive('manyToOneField',function($location,$routeParams,Restangular){
		return {
			restrict: 'E',
			scope : {
				field: '=field',
				element: '=element',
				elementRelationships: '=elementRelationships'
			},
			templateUrl : 'app/dynamicABM/directives/templates/manyToOneField.html',
			link: function($scope, element, attrs) {
				Restangular.all($scope.field.fieldId).getList().then(function(elements){
					$scope.elements = elements;

					_.forEach($scope.elements, function(row){
						$scope.options.push({
							text:row.nombre,
							value:row._links.self.href
						});
					});
				});
				
				$scope.options = [];
				
				$scope.changeReference = function(option){
					$scope.element[$scope.field.fieldId] = option.value;
					$scope.elementRelationships[$scope.field.fieldId][0][$scope.field.relationshipDescriptor.fieldId] = option.text;
				};
				
				$scope.goTo = function(path){
					$location.path(path);
				};
			}
		}
	});
});