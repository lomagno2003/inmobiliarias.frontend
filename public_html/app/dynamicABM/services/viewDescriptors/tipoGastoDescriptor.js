define(['dynamicABM/services/viewDescriptors/viewDescriptorRepository'], function (viewDescriptorRepository) {
	console.debug('Defining consorcioDescriptor');
	var viewDescriptorRepository = (function(viewDescriptorRepository){
		viewDescriptorRepository['tipoGasto'] = {
		'idField':'idTipoGasto',
		'listView' : {
				title : "Detalles del Tipo de Gasto",
				columns : [ {
					'columnId' : 'valorDefecto',
					'columnName' : 'Valor por defecto',
					'columnType' : 'text'
				}, {
					'columnId' : 'descripcion',
					'columnName' : 'Descripción',
					'columnType' : 'text'
				}]
		}, 'detailView' : {
			title : "Detalles del gasto",
			fields : [ {
				'fieldId' : 'valorDefecto',
				'fieldName' : 'Valor por defecto',
				'fieldType' : 'text'
			}, {
				'fieldId' : 'descripcion',
				'fieldName' : 'Descripción',
				'fieldType' : 'text'
			}]
		}
	};
		
		return viewDescriptorRepository;
	}(viewDescriptorRepository));
	
	return viewDescriptorRepository;
});