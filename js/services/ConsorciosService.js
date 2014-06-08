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
	
    this.loadRepository = function(fnc){
		consorciosAPI = $resource("http://localhost:port/consorcio", {port:':8082'});
		
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
    	consorciosAPI = $resource("http://localhost:port/consorcio/:idConsorcio", {port:':8082', idConsorcio:id});
    	
		var returnValue = consorciosAPI.get(function(){
			fnc(returnValue);
		});
    };
});