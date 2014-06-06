var myApp = angular.module('myApp');
 
myApp.service('RepositoryService', function(
		$resource, $routeParams, ConsorciosService, PropiedadesService, PropietariosService) {	
    this.getRepository = function(){
    	var repositoryService;
    	
    	switch($routeParams.repository){
		case 'consorcios':
			repositoryService = ConsorciosService;
			break;
		case 'propiedades':
			repositoryService = PropiedadesService;
			break;
		case 'propietarios':
			repositoryService = PropietariosService;
			break;
		}
    	
    	return repositoryService;
    };
});