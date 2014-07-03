define(['app','require',
        'services/viewDescriptors/viewDescriptorRepository',
        'services/viewDescriptors/consorcioDescriptor',
        'services/viewDescriptors/gastoDescriptor',
        'services/viewDescriptors/propiedadDescriptor',
        'services/viewDescriptors/propietarioDescriptor',
        'services/viewDescriptors/tipoGastoDescriptor'
        
        ],function(app,require,viewDescriptorRepository){
	console.info('Configuring viewDescriptorService');

	app.register.service('viewDescriptorService',function($routeParams) {
	    this.getDescriptor = function(name){
	    	return viewDescriptorRepository[name];
	    };
	    
	    this.registerDescriptor = function(name,descriptor){	    	
	    	descriptors[name] = descriptor;
	    };
	});		
});