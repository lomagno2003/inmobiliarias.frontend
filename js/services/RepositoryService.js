var myApp = angular.module('myApp');
 
myApp.service('RepositoryService', function(
		$resource, $routeParams, ConsorciosService, PropiedadesService, PropietariosService) {	
    this.getRepository = function(repository){
    	var repositoryService;
    	
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
});