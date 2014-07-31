define(['dynamicABM/services/viewDescriptors/viewDescriptorRepository'], function (viewDescriptorRepository) {
	var viewDescriptorRepository = (function(viewDescriptorRepository){
		viewDescriptorRepository['concepto'] = {
		'idField':'idConcepto',
		'listView' : {
				title : "Detalles del Concepto",
				columns : [ {
					'fieldId' : 'nombre',
					'fieldName' : 'Nombre',
					'fieldType' : 'text'
				}, {
					'fieldId' : 'descripcion',
					'fieldName' : 'Descripción',
					'fieldType' : 'text'
				}]
		}, 'detailView' : {
			title : "Detalles del Concepto",
			fields : [ {
				'fieldId' : 'nombre',
				'fieldName' : 'Nombre',
				'fieldType' : 'text'
			}, {
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