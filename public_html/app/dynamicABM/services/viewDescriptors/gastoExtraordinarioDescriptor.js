define(['dynamicABM/services/viewDescriptors/viewDescriptorRepository'], function (viewDescriptorRepository) {
	console.debug('Defining gastoOrdinarioDescriptor');
	var viewDescriptorRepository = (function(viewDescriptorRepository){
		viewDescriptorRepository['gastoExtraordinario'] = {
		'idField':'idGasto',
		'listView' : {
				title : "Detalles del Gasto",
				columns : [ {
					'columnId' : 'monto',
					'columnName' : 'Monto',
					'columnType' : 'text'
				}, {
					'columnId' : 'comprobante',
					'columnName' : 'Comprobante',
					'columnType' : 'text'
				}, {
					'columnId' : 'unidadFuncional',
					'columnName' : 'Unidad Funcional',
					'columnType' : 'manyToOne',
					'relationshipDescriptor' :  
				    {
						'fieldId' : 'nombre',
						'fieldName' : 'Nombre',
						'fieldType' : 'text'	
				    }
				}]
		}, 'detailView' : {
			title : "Detalles del gasto",
			fields : [ {
				'fieldId' : 'concepto',
				'fieldName' : 'Concepto del gasto',
				'fieldType' : 'manyToOne',
				'relationshipDescriptor' : {
					'columnId' : 'descripcion',
					'columnName' : 'Descripcion'
				} 
			}, {
				'fieldId' : 'monto',
				'fieldName' : 'Monto',
				'fieldType' : 'text'
			}, {
				'fieldId' : 'comprobante',
				'fieldName' : 'Comprobante',
				'fieldType' : 'text'
			}, {
				'fieldId' : 'comentarios',
				'fieldName' : 'Comentarios',
				'fieldType' : 'text'
			}, {
				'fieldId' : 'unidadFuncional',
				'fieldName' : 'Unidad Funcional',
				'fieldType' : 'manyToOne',
				'relationshipDescriptor' :  
			    {
					'fieldId' : 'nombre',
					'fieldName' : 'Nombre',
					'fieldType' : 'text'	
			    }
			}]
		}
	};
		
		return viewDescriptorRepository;
	}(viewDescriptorRepository));
	
	return viewDescriptorRepository;
});