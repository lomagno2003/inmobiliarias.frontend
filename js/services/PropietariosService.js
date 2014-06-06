var myApp = angular.module('myApp');
 
myApp.service('PropietariosService', function($resource) {	
    this.loadRepository = function(fnc){
    	propietariosAPI = $resource("http://localhost:port/propietarios", {port:':8082'});
		
		var returnValue = propietariosAPI.get(function(){
			if(returnValue.hasOwnProperty('_embedded')){
				console.log(returnValue);
				fnc(returnValue._embedded.propietarios);
			} else {
				fnc({});
			}
		});
    };
    
    this.loadElement = function(id,fnc){
    	propietariosAPI = $resource("http://localhost:port/propietarios/:idPropietarios", {port:':8082', idPropietario:id});
    	
		var returnValue = propietariosAPI.get(function(){
			fnc(returnValue);
		});
    };
});