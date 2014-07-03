define(['services/viewDescriptors/viewDescriptorRepository'], function (viewDescriptorRepository) {
	console.debug('Defining consorcioDescriptor');
	var viewDescriptorRepository = (function(viewDescriptorRepository){
		viewDescriptorRepository['consorcio'] = {
			'idField':'idConsorcio',
			'reportName':'detailConsorcio',
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
					'fieldType' : 'oneToMany',
					'relationshipDescriptor' : [ {
						'fieldId' : 'nombre',
						'fieldName' : 'Nombre',
						'fieldType' : 'text'
					} ]
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
				} ]
			}
		};
		
		return viewDescriptorRepository;
	}(viewDescriptorRepository));
	
	return viewDescriptorRepository;
});