var myApp = angular.module('myApp');

myApp.config(function(RestangularProvider,constants) {
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
});;