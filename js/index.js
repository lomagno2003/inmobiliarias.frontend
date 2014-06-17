
jQuery(document).ready(function($) {
      $(".clickableRow").click(function() {
            window.document.location = $(this).attr("href");
      });
});


var myApp = angular.module('myApp', ['ngResource','ngRoute','restangular'])
.config(function(RestangularProvider) {
	  RestangularProvider.setBaseUrl(
	    'http://localhost:8082/');
	  
	  RestangularProvider.setResponseInterceptor(function(response, operation, route, url) {
		  var newResponse;
	      if (operation === "getList") {
	    	if(response.hasOwnProperty('_embedded')){
		        newResponse = response._embedded[route];
	    	} else {
	    		newResponse = [];
	    	}
	      } else {
	        newResponse = response;
	      }
	      return newResponse;
	    });
});;