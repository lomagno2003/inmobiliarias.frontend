define(['app','require',
        'dynamicABM/services/viewDescriptors/viewDescriptorRepository',
        'dynamicABM/services/viewDescriptors/consorcioDescriptor',
        'dynamicABM/services/viewDescriptors/gastoOrdinarioDescriptor',
        'dynamicABM/services/viewDescriptors/gastoExtraordinarioDescriptor',
        'dynamicABM/services/viewDescriptors/unidadFuncionalDescriptor',
        'dynamicABM/services/viewDescriptors/propietarioDescriptor',
        'dynamicABM/services/viewDescriptors/conceptoDescriptor'
        
        ],function(app,require,viewDescriptorRepository){
	app.register.service('viewDescriptorService',function($routeParams) {
	    this.getDescriptor = function(name){
	    	return viewDescriptorRepository[name];
	    };
	    
	    this.registerDescriptor = function(name,descriptor){	    	
	    	descriptors[name] = descriptor;
	    };
	});		
});