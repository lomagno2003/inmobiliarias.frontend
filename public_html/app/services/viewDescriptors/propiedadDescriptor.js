propiedadDescriptor = {
	'idField':'idPropiedad',
	'reportName':'detailPropiedad',
	'listView' : {
			title : "Propiedades",
			columns : [ {
				'columnId' : 'nombre',
				'columnName' : 'Nombre'
			} ]	
	}, 'detailView' : {
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
			'fieldId' : 'gasto',
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