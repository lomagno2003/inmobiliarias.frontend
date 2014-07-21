define(['app'],function(app){
	
	app.register.directive('manyToOneField',function($location,$routeParams){
		return {
			restrict: 'E',
			scope : {
				field: '=field',
				element: '=element'
			},
			templateUrl : 'app/dynamicABM/directives/templates/manyToOneField.html',
			link: function($scope, element, attrs) {
				$scope.changeReference = function(fieldId){
					path = $routeParams.repository.concat('/').concat($routeParams.id).concat('/').concat(fieldId);
					$scope.goTo(path);
				};
				
				$scope.goTo = function(path){
					$location.path(path);
				};
			}
		}
	});
});