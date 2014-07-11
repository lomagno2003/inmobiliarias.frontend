define([ 'angularAMD', 'angular-route' , 'restangular'], function(angularAMD) {
	console.info("Configuring app");
	var app = angular.module('webapp',
			[ 'ngRoute', 'restangular' ]);

	console.info("Configuring route provider");
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
	
	console.info("Configuring Constants");
	app.constant('constants',{
		restServerURI:'http://localhost:8082/rest',
		jasperServerURI:'http://localhost:8081/jasper/report/'
	});
	
	console.info("Configuring Restangular");
	app.config(function(RestangularProvider,constants) {
		RestangularProvider.setBaseUrl(
				  constants.restServerURI);
		  
		RestangularProvider.setResponseInterceptor(function(response, operation, route, url) {
			  var newResponse;
		      if (operation === "getList") {
		    	if(response.hasOwnProperty('_embedded')){
			        newResponse = response._embedded[route];
		    	} else {
		    		if(response)
		    			newResponse = [response];
		    		else
		    			newResponse = [];
		    	}
		      } else {
		        newResponse = response;
		      }
		      return newResponse;
		    });
	});
	
	console.info("Bootstrapping app");
	angularAMD.bootstrap(app);
	return app;
});