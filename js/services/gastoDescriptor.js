gastoDescriptor = {
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
				'columnId' : 'consorcio',
				'columnName' : 'Consorcio',
				'columnType' : 'manyToOne',
				'relationshipDescriptor' :  
			    {
					'fieldId' : 'nombre',
					'fieldName' : 'Nombre',
					'fieldType' : 'text'	
			    }
			}, {
				'columnId' : 'propiedad',
				'columnName' : 'Propiedad',
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
			'fieldId' : 'tipoGasto',
			'fieldName' : 'Tipo de gasto',
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
			'fieldId' : 'propiedad',
			'fieldName' : 'Propiedad',
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