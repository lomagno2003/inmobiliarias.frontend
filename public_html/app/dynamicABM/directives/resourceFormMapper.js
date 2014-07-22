define(['app',
        'dynamicABM/directives/basicField',
        'dynamicABM/directives/oneToManyField',
        'dynamicABM/directives/manyToOneField',
        ],function(app){
	app.register.directive('resourceFormMapper',function(){
		return {
			restrict: 'E',
			scope : {
				descriptor: '=descriptor',
				element: '=element',
				elementRelationships: '=elementRelationships'
			},
			templateUrl : 'app/dynamicABM/directives/templates/resourceFormMapper.html'
		}
	});
});