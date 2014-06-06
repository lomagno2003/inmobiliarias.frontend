var myApp = angular.module('myApp');
 
myApp.service('ConsorciosService', function($resource) {	
    this.loadRepository = function(fnc){
		consorciosAPI = $resource("http://localhost:port/consorcios", {port:':8082'});
		
		var returnValue = consorciosAPI.get(function(){
			if(returnValue.hasOwnProperty('_embedded')){
				fnc(returnValue._embedded.consorcios);
			} else {
				fnc({});
			}
		});
    };
    
    this.loadElement = function(id,fnc){
    	console.log(id);
    	consorciosAPI = $resource("http://localhost:port/consorcios/:idConsorcio", {port:':8082', idConsorcio:id});
    	
		var returnValue = consorciosAPI.get(function(){
			fnc(returnValue);
		});
    };
});