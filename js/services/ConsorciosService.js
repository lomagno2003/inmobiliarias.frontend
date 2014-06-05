var myApp = angular.module('myApp');
 
myApp.service('ConsorciosService', function($resource) {
	this.consorciosAPI = $resource("http://localhost:port/consorcios", {port:':8082'});

    this.getConsorcios = function(){
    	return this.consorciosAPI.get();
    };
});