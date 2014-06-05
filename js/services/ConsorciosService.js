var myApp = angular.module('myApp');
 
myApp.service('ConsorciosService', function($resource) {	
    this.getConsorcios = function(){
		consorciosAPI = $resource("http://localhost:port/consorcios/:idConsorcio", {port:':8082'});
		
    	return consorciosAPI.get();
    };
    
    this.getConsorcio = function(link){
    	consorciosAPI = $resource(link);
    	
    	return consorciosAPI.get({idConsorcio:id});
    };
});