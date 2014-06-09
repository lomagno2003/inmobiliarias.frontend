var myApp = angular.module('myApp');
 
myApp.service('PropietariosService', function($resource) {
	this.viewStructure = [
	              		{
	              			'fieldId':'nombre',
	              			'fieldName':'Nombre',
	              			'fieldType':'text'
	              		},
	              		{
	              			'fieldId':'propiedad',
	              			'fieldName':'Propiedades',
	              			'fieldType':'table',
	              			'columns':[
	              				{
	              					'columnId':'nombre',
	              					'columnName':'Nombre'
	              				}
	              			]
	              		}
	              	];
	
	this.loadElements = function(fnc){
		this.loadElementsFromLink("http://localhost:8082/propietario",fnc);
	};

    this.loadElementsFromLink = function(link,fnc){
    	propietariosAPI = $resource(link);
		
		var returnValue = propietariosAPI.get(function(){
			if(returnValue.hasOwnProperty('_embedded')){
				console.log(returnValue);
				fnc(returnValue._embedded.propietario);
			} else {
				fnc({});
			}
		});
    };
    
    this.loadElement = function(id,fnc){
    	propietariosAPI = $resource("http://localhost:port/propietario/:idPropietario", {port:':8082', idPropietario:id});
    	
		var returnValue = propietariosAPI.get(function(){
			fnc(returnValue);
		});
    };
});