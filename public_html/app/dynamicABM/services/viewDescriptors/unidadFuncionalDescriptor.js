define(['dynamicABM/services/viewDescriptors/viewDescriptorRepository'], function (viewDescriptorRepository) {
	var viewDescriptorRepository = (function(viewDescriptorRepository){
		viewDescriptorRepository['unidadFuncional'] = {
		'idField':'idUnidadFuncional',
		'reportName':'detailPropiedad',
		'listView' : {
				title : "Unidades Funcionales",
				columns : [ {
					'fieldId' : 'nombre',
					'fieldName' : 'Nombre',
					'fieldType' : 'text'
				} ]	
		}, 'detailView' : {
			title : "Detalles de la unidad funcional",
			fields : [ {
				'fieldId' : 'nombre',
				'fieldName' : 'Nombre',
				'fieldType' : 'text',
				'fieldDefaultValue':'Nueva Unidad Funcional'
			},{
				'fieldId' : 'direccion',
				'fieldName' : 'Direccion',
				'fieldType' : 'text'
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
				'fieldId' : 'balance',
				'fieldName' : 'Balance',
				'fieldType' : 'number',
				'fieldDisabled':'true'
			}, {
				'fieldId' : 'cambioPorcentajeGastos',
				'fieldName' : 'Cambios en los porcentajes de gastos comunes',
				'fieldType' : 'oneToMany',
				'fieldDisabled':'true',
				'fieldInRequest':'true',
				'relationshipDescriptor' :  [
					{
						'fieldId' : 'fecha',
						'fieldName' : 'Fecha del cambio',
						'fieldType' : 'date'	
					},
				    {
						'fieldId' : 'porcentajeGasto',
						'fieldName' : 'Porcentaje de Gastos',
						'fieldType' : 'text'	
				    }]
			}, {
				'fieldId' : 'gastoExtraordinario',
				'fieldName' : 'Gastos',
				'fieldType' : 'oneToMany',
				'relationshipDescriptor' : [ {
					'fieldId' : 'fecha',
					'fieldName' : 'Fecha del pago',
					'fieldType' : 'date'
				}, {
					'fieldId' : 'monto',
					'fieldName' : 'Monto',
					'fieldType' : 'text'
				}, {
					'fieldId' : 'comentarios',
					'fieldName' : 'Comentarios',
					'fieldType' : 'text'
				} ]
			}, {
				'fieldId' : 'pago',
				'fieldName' : 'Pagos',
				'fieldType' : 'oneToMany',
				'relationshipDescriptor' : [ {
					'fieldId' : 'fecha',
					'fieldName' : 'Fecha del pago',
					'fieldType' : 'date'
				}, {
					'fieldId' : 'monto',
					'fieldName' : 'Monto',
					'fieldType' : 'text'
				}, {
					'fieldId' : 'comentario',
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