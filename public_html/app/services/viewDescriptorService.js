var myApp = angular.module('myApp');
 
myApp.service('viewDescriptorService',['$routeParams',function($routeParams) {
    this.getDescriptor = function(repository){
    	var repositoryService;
    	    	
    	switch(repository){
		case 'consorcio':
			repositoryService = consorcioDescriptor;
			break;
		case 'propiedad':
			repositoryService = propiedadDescriptor;
			break;
		case 'propietario':
			repositoryService = propietarioDescriptor;
			break;
		case 'gasto':
			repositoryService = gastoDescriptor;
			break;
		case 'tipoGasto':
			repositoryService = tipoGastoDescriptor;
			break;
		}
    	
    	return repositoryService;
    };
}]);