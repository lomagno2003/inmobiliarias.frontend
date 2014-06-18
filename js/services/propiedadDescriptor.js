propiedadDescriptor = {
	'idField':'idPropiedad',
	viewListStructure : {
			title : "Detalles de la propiedad",
			columns : [ {
				'columnId' : 'nombre',
				'columnName' : 'Nombre'
			} ]	
	}, viewStructure : {
		title : "Detalles de la propiedad",
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
			'fieldType' : 'reference',
			'referenceField' :  
			    {
					'fieldId' : 'nombre',
					'fieldName' : 'Nombre',
					'fieldType' : 'text'	
			    }
		}, {
			'fieldId' : 'propietario',
			'fieldName' : 'Propietario',
			'fieldType' : 'reference',
			'referenceField' :  
			    {
					'fieldId' : 'nombre',
					'fieldName' : 'Nombre',
					'fieldType' : 'text'	
			    }
		}, {
			'fieldId' : 'gasto',
			'fieldName' : 'Gastos',
			'fieldType' : 'table',
			'columns' : [ {
				'columnId' : 'monto',
				'columnName' : 'Monto'
			}, {
				'columnId' : 'comentarios',
				'columnName' : 'Comentarios'
			} ]
		}]
	}
};