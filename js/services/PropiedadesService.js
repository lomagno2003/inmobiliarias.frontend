var myApp = angular.module('myApp');
 
myApp.service('PropiedadesService', function($resource) {	
    this.loadRepository = function(fnc){
    	propiedadesAPI = $resource("http://localhost:port/propiedad", {port:':8082'});
    	
		var returnValue = propiedadesAPI.get(function(){
			if(returnValue.hasOwnProperty('_embedded')){
				fnc(returnValue._embedded.propiedad);
			} else {
				fnc({});
			}
		});
    };
    
    this.loadElement = function(id,fnc){
    	propiedadesAPI = $resource("http://localhost:port/propiedad/:idPropiedad", {port:':8082', idPropiedad:id});
    	
		var returnValue = propiedadesAPI.get(function(){
			fnc(returnValue._embedded.propiedad);
		});
    };
});