var myApp = angular.module('myApp', ['ngResource','ngRoute']);

myApp.run(function ($rootScope) {
	$rootScope.globalVariables = [];
	$rootScope.globalVariables["consorcios.repository.title"] = "";
	$rootScope.globalVariables["consorcios.abm.title"] = "TITULO";
});