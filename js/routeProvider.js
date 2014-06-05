var myApp = angular.module('myApp');

// configure our routes
myApp.config(function($routeProvider) {
	$routeProvider

	// route for the home page
	.when('/', {
		templateUrl : 'pages/home.html',
		controller : 'mainController'
	})

	// route for the about page
	.when('/consorcios', {
		templateUrl : 'pages/consorcios.html',
		controller : 'consorciosController'
	})

	// route for the contact page
	.when('/propiedades', {
		templateUrl : 'pages/propiedades.html',
		controller : 'contactController'
	});
});