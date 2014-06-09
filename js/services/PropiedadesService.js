var myApp = angular.module('myApp');
 
myApp.service('PropiedadesService', function($resource) {
	this.viewStructure = [
	              		{
	              			'fieldId':'nombre',
	              			'fieldName':'Nombre',
	              			'fieldType':'text'
	              		},
	              		{
	              			'fieldId':'direccion',
	              			'fieldName':'Direccion',
	              			'fieldType':'text'
	              		},
	              		{
	              			'fieldId':'porcentajeGastosComunes',
	              			'fieldName':'Porcentaje de gastos comunes',
	              			'fieldType':'number'
	              		}
	              	];
	this.loadElements = function(fnc){
		this.loadElementsFromLink("http://localhost:8082/propiedad",fnc);
    };
    
    this.loadElementsFromLink = function(link,fnc){
    	propiedadesAPI = $resource(link);
    	
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
			fnc(returnValue);
		});
    };
});