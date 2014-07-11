define(['dynamicABM/services/viewDescriptors/viewDescriptorRepository'], function (viewDescriptorRepository) {
	console.debug('Defining unidadFuncionalDescriptor');
	var viewDescriptorRepository = (function(viewDescriptorRepository){
		viewDescriptorRepository['unidadFuncional'] = {
		'idField':'idUnidadFuncional',
		'reportName':'detailPropiedad',
		'listView' : {
				title : "Unidades Funcionales",
				columns : [ {
					'columnId' : 'nombre',
					'columnName' : 'Nombre'
				} ]	
		}, 'detailView' : {
			title : "Detalles de la unidad funcional",
			fields : [ {
				'fieldId' : 'nombre',
				'fieldName' : 'Nombre',
				'fieldType' : 'text'
			}, {
				'fieldId' : 'direccion',
				'fieldName' : 'Direccion',
				'fieldType' : 'text'
			}, {
				'fieldId' : 'porcentajeGastosComunes',
				'fieldName' : 'Porcentaje de gastos comunes',
				'fieldType' : 'number'
			}, {
				'fieldId' : 'consorcio',
				'fieldName' : 'Consorcio',
				'fieldType' : 'manyToOne',
				'relationshipDescriptor' :  
				    {
						'fieldId' : 'nombre',
						'fieldName' : 'Nombre',
						'fieldType' : 'text'	
				    }
			}, {
				'fieldId' : 'propietario',
				'fieldName' : 'Propietario',
				'fieldType' : 'manyToOne',
				'relationshipDescriptor' :  
				    {
						'fieldId' : 'nombre',
						'fieldName' : 'Nombre',
						'fieldType' : 'text'	
				    }
			}, {
				'fieldId' : 'gastoOrdinario',
				'fieldName' : 'Gastos',
				'fieldType' : 'oneToMany',
				'relationshipDescriptor' : [ {
					'fieldId' : 'monto',
					'fieldName' : 'Monto',
					'fieldType' : 'text'
				}, {
					'fieldId' : 'comentarios',
					'fieldName' : 'Comentarios',
					'fieldType' : 'text'
				} ]
			}]
		}
	};
		
		return viewDescriptorRepository;
	}(viewDescriptorRepository));
	
	return viewDescriptorRepository;
});