var myApp = angular.module('myApp');
 
myApp.service('RepositoryService',['$resource', '$routeParams', 'ConsorciosService', 'PropiedadesService', 'PropietariosService',
                           function($resource, $routeParams, ConsorciosService, PropiedadesService, PropietariosService) {
	
    this.getRepository = function(repository){
    	var repositoryService;
    	
    	console.log('Loading repository of:"'.concat(repository).concat('"'));
    	
    	switch(repository){
		case 'consorcio':
			repositoryService = ConsorciosService;
			break;
		case 'propiedad':
			repositoryService = PropiedadesService;
			break;
		case 'propietario':
			repositoryService = PropietariosService;
			break;
		}
    	
    	return repositoryService;
    };
    
    this.getResource = function(repository,id){
    	return $resource("http://localhost:port/:repository/:id",{"port":":8082","repository":repository,"id":id},
    		{
	            create: {method: "GET"},
	            update: {method : "PUT"}
	        }
    	);
    };
    
    this.getResourceFromLink = function(link){
    	return $resource(link,{},
    		{
	            create: {method: "GET"},
	            update: {method : "PUT"}
	        }
    	);
    };
}]);