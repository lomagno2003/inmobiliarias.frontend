define(['app'],function(app){
	app.register.directive('basicField',function(){
		return {
			restrict: 'E',
			scope : {
				field: '=field',
				element: '=element'
			},
			templateUrl : 'app/dynamicABM/directives/templates/basicField.html'
		}
	});
});