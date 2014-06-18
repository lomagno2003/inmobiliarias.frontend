consorcioDescriptor = {
	'idField':'idConsorcio',
	'viewListStructure':{
			title : "Consorcios",
			columns : [ {
				'columnId' : 'nombre',
				'columnName' : 'Nombre'
			} ]	
	}, 
	'viewStructure':{
		title : "Detalles del consorcio",
		fields : [ {
			'fieldId' : 'nombre',
			'fieldName' : 'Nombre',
			'fieldType' : 'text'
		}, {
			'fieldId' : 'propiedad',
			'fieldName' : 'Propiedades',
			'fieldType' : 'table',
			'columns' : [ {
				'columnId' : 'nombre',
				'columnName' : 'Nombre'
			} ]
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
		} ]
	}
};