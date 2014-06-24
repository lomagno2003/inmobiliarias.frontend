var myApp = angular.module('myApp');

myApp.config(function(RestangularProvider) {
	  RestangularProvider.setBaseUrl(
	    'http://localhost:8082/rest/');
	  
	  RestangularProvider.setResponseInterceptor(function(response, operation, route, url) {
		  var newResponse;
	      if (operation === "getList") {
	    	if(response.hasOwnProperty('_embedded')){
		        newResponse = response._embedded[route];
	    	} else {
	    		newResponse = [response];
	    	}
	      } else {
	        newResponse = response;
	      }
	      return newResponse;
	    });
});;