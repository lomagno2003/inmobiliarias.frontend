var myApp = angular.module('myApp');
 
myApp.service('ConsorciosService', function($resource) {	
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
		this.loadElementsFromLink("http://localhost:8082/consorcio",fnc);
	};
	
    this.loadElementsFromLink = function(link,fnc){
		consorciosAPI = $resource(link);
		
		var returnValue = consorciosAPI.get(function(){
			if(returnValue.hasOwnProperty('_embedded')){
				fnc(returnValue._embedded.consorcio);
			} else {
				fnc({});
			}
		});
    };
    
    this.loadElement = function(id,fnc){
    	console.log(id);
    	consorciosAPI = $resource("http://localhost:port/consorcio/:idConsorcio", {port:':8082', idConsorcio:id});
    	
		var returnValue = consorciosAPI.get(function(){
			fnc(returnValue);
		});
    };
});