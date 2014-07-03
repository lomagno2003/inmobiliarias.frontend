define([ 'angularAMD', 'angular-route' , 'restangular'], function(angularAMD) {
	console.info("Configuring app");
	var app = angular.module('webapp',
			[ 'ngRoute', 'restangular' ]);

	console.info("Configuring route provider");
	app.config(function($routeProvider) {
		$routeProvider

		.when('/error/:errorId', angularAMD.route({
			templateUrl : 'app/views/error/',
			controller : 'errorViewController',
			controllerUrl : 'controllers/errorViewController'
		}))

		.when('/', angularAMD.route({
			templateUrl : 'app/views/tiles/home.html',
			controller : 'mainController',
			controllerUrl : 'controllers/mainController'
		}))

		.when('/:repository/:id/', angularAMD.route({
			templateUrl : 'app/views/abm/detail/',
			controller : 'detailViewController',
			controllerUrl : 'controllers/detailViewController'
		}))

		.when('/:repository', angularAMD.route({
			templateUrl : 'app/views/abm/list/',
			controller : 'listViewController',
			controllerUrl : 'controllers/listViewController'
		}))

		.when('/:repository/:id/:repositoryItem', angularAMD.route({
			templateUrl : 'app/views/abm/list/',
			controller : 'selectItemViewController',
			controllerUrl : 'controllers/selectItemViewController'
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