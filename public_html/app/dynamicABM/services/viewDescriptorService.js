define(['app','require',
        'dynamicABM/services/viewDescriptors/viewDescriptorRepository',
        'dynamicABM/services/viewDescriptors/consorcioDescriptor',
        'dynamicABM/services/viewDescriptors/gastoDescriptor',
        'dynamicABM/services/viewDescriptors/propiedadDescriptor',
        'dynamicABM/services/viewDescriptors/propietarioDescriptor',
        'dynamicABM/services/viewDescriptors/tipoGastoDescriptor'
        
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