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
	.when('/:repository/:id/', {
		templateUrl : 'pages/abm/detailView.html',
		controller : 'detailViewController'
	})

	// route for the about page
	.when('/:repository', {
		templateUrl : 'pages/abm/listView.html',
		controller : 'listViewController'
	});
	

});