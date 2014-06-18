consorcioDescriptor = {
	'idField':'idConsorcio',
	'listView':{
			title : "Consorcios",
			columns : [ {
				'columnId' : 'nombre',
				'columnName' : 'Nombre'
			} ]	
	}, 
	'detailView':{
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