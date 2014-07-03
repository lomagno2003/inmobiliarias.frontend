define(['app',
        'services/viewDescriptors/consorcioDescriptor',
        'services/viewDescriptors/propiedadDescriptor',
        'services/viewDescriptors/propietarioDescriptor',
        'services/viewDescriptors/gastoDescriptor',
        'services/viewDescriptors/tipoGastoDescriptor'
        ],function(app){
	app.register.service('viewDescriptorService',['$routeParams',function($routeParams) {
    	console.info('Configuring viewDescriptorService');

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
});