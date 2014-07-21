define(['dynamicABM/services/viewDescriptors/viewDescriptorRepository'], function (viewDescriptorRepository) {
	var viewDescriptorRepository = (function(viewDescriptorRepository){
		viewDescriptorRepository['propietario'] = {
		'idField':'idPersona',
		'listView' : {
				title : "Detalles del propietario",
				columns : [ {
					'fieldId' : 'nombre',
					'fieldName' : 'Nombre'
				}, {
					'fieldId' : 'dni',
					'fieldName' : 'DNI'
				}]
		}, 'detailView' : {
			title : "Detalles del propietario",
			fields : [ {
				'fieldId' : 'nombre',
				'fieldName' : 'Nombre',
				'fieldType' : 'text'
			}, {
				'fieldId' : 'dni',
				'fieldName' : 'DNI',
				'fieldType' : 'text'
			}, {
				'fieldId' : 'direccion',
				'fieldName' : 'Direccion',
				'fieldType' : 'text'
			}, {
				'fieldId' : 'telefonoFijo',
				'fieldName' : 'Telefono',
				'fieldType' : 'text'
			}, {
				'fieldId' : 'telefonoMovil',
				'fieldName' : 'Movil',
				'fieldType' : 'text'
			}, {
				'fieldId' : 'email',
				'fieldName' : 'Correo Electronico',
				'fieldType' : 'text'
			}, {
				'fieldId' : 'unidadFuncional',
				'fieldName' : 'Unidades Funcionales',
				'fieldType' : 'oneToMany',
				'relationshipDescriptor' : [ {
					'fieldId' : 'nombre',
					'fieldName' : 'Nombre',
					'fieldType' : 'text'
				} ]
			} ]
		}
	};
		
		return viewDescriptorRepository;
	}(viewDescriptorRepository));
	
	return viewDescriptorRepository;
});