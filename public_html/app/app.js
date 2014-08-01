define([ 'angularAMD', 'angular-route' , 'restangular'], function(angularAMD) {
	var app = angular.module('webapp',
			[ 'ngRoute', 'restangular' ]);
	
	//Allow CORS
	app.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }]);


	app.config(function($routeProvider) {
		$routeProvider

		.when('/error/:errorId', angularAMD.route({
			templateUrl : 'app/errorManagment/views/error/',
			controller : 'errorViewController',
			controllerUrl : 'errorManagment/controllers/errorViewController'
		}))

		.when('/', angularAMD.route({
			templateUrl : 'app/common/views/tiles/home.html',
			controller : 'mainController',
			controllerUrl : 'controllers/mainController'
		}))

		.when('/:repository/:id/', angularAMD.route({
			templateUrl : 'app/dynamicABM/views/detail/',
			controller : 'detailViewController',
			controllerUrl : 'dynamicABM/controllers/detailViewController'
		}))

		.when('/:repository', angularAMD.route({
			templateUrl : 'app/dynamicABM/views/list/',
			controller : 'listViewController',
			controllerUrl : 'dynamicABM/controllers/listViewController'
		}))

		.when('/:repository/:id/:repositoryItem', angularAMD.route({
			templateUrl : 'app/dynamicABM/views/list/',
			controller : 'selectItemViewController',
			controllerUrl : 'dynamicABM/controllers/selectItemViewController'
		}));
	});
	
	app.constant('constants',{
		restServerURI:'http://localhost:8082/rest',
		jasperServerURI:'http://localhost:8081/jasper/report/'
	});
	
	app.config(function(RestangularProvider,constants) {
		RestangularProvider.setBaseUrl(
				  constants.restServerURI);
		  
		RestangularProvider.setResponseInterceptor(function(response, operation, route, url) {
			  var newResponse;
		      if (operation === "getList") {
		    	if(response.hasOwnProperty('_embedded')){
			        newResponse = response._embedded[route];
		    	} else {
		    		var isEmpty = true;
		    		for(var prop in response){
		    			if(response.hasOwnProperty(prop)){
		    				isEmpty = false;
		    			}
		    		}
		    		if(response&&!isEmpty){
		    			newResponse = [response];
		    		}	else {
		    			newResponse = [];
		    		}
		    	}
		      } else {
		        newResponse = response;
		      }
		      return newResponse;
		    });
	});
	
	angularAMD.bootstrap(app);
	return app;
});