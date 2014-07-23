define(['dynamicABM/services/viewDescriptors/viewDescriptorRepository'], function (viewDescriptorRepository) {
	var viewDescriptorRepository = (function(viewDescriptorRepository){
		viewDescriptorRepository['pago'] = {
		'idField':'idPago',
		'listView' : {
				title : "Detalles del Pago",
				columns : [ {
					'fieldId' : 'monto',
					'fieldName' : 'Monto',
					'fieldType' : 'text'
				}, {
					'fieldId' : 'comentario',
					'fieldName' : 'Comentario',
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
			title : "Detalles del Pago",
			fields : [{
				'fieldId' : 'monto',
				'fieldName' : 'Monto',
				'fieldType' : 'text'
			}, {
				'fieldId' : 'comentario',
				'fieldName' : 'Comentario',
				'fieldType' : 'text'
			}, {
				'fieldId' : 'fecha',
				'fieldName' : 'Fecha del pago',
				'fieldType' : 'date'
			}, {
				'fieldId' : 'depositoBancario',
				'fieldName' : 'Deposito Bancario',
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