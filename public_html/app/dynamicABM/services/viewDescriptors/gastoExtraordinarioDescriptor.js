define(['dynamicABM/services/viewDescriptors/viewDescriptorRepository'], function (viewDescriptorRepository) {
	var viewDescriptorRepository = (function(viewDescriptorRepository){
		viewDescriptorRepository['gastoExtraordinario'] = {
		'idField':'idGasto',
		'listView' : {
				title : "Detalles del Gasto",
				columns : [ {
					'fieldId' : 'monto',
					'fieldName' : 'Monto',
					'fieldType' : 'text'
				}, {
					'fieldId' : 'comprobante',
					'fieldName' : 'Comprobante',
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