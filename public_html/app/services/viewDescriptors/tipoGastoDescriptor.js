define([], function () {
	tipoGastoDescriptor = {
		'idField':'idTipoGasto',
		'listView' : {
				title : "Detalles del Tipo de Gasto",
				columns : [ {
					'columnId' : 'valorDefecto',
					'columnName' : 'Valor por defecto',
					'columnType' : 'text'
				}, {
					'columnId' : 'descripcion',
					'columnName' : 'Descripción',
					'columnType' : 'text'
				}]
		}, 'detailView' : {
			title : "Detalles del gasto",
			fields : [ {
				'fieldId' : 'valorDefecto',
				'fieldName' : 'Valor por defecto',
				'fieldType' : 'text'
			}, {
				'fieldId' : 'descripcion',
				'fieldName' : 'Descripción',
				'fieldType' : 'text'
			}]
		}
	};
});