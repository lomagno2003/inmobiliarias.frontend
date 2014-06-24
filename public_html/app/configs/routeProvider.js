var myApp = angular.module('myApp');

// configure our routes
myApp.config(function($routeProvider) {
	$routeProvider

	// route for the home page
	.when('/', {
		templateUrl : 'app/views/tiles/home.html',
		controller : 'mainController'
	})
	
		// route for the about page
	.when('/:repository/:id/', {
		templateUrl : 'app/views/abm/detail/',
		controller : 'detailViewController'
	})

	// route for the about page
	.when('/:repository', {
		templateUrl : 'app/views/abm/list/',
		controller : 'listViewController'
	})
	
	// route for the about page
	.when('/:repository/:id/:repositoryItem', {
		templateUrl : 'app/views/abm/list/',
		controller : 'selectItemViewController'
	});
});