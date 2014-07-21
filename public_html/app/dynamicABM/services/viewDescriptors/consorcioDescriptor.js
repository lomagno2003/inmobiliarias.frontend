define(['dynamicABM/services/viewDescriptors/viewDescriptorRepository'], function (viewDescriptorRepository) {
	var viewDescriptorRepository = (function(viewDescriptorRepository){
		viewDescriptorRepository['consorcio'] = {
			'idField':'idConsorcio',
			'reportName':'detailConsorcio',
			'listView':{
					title : "Consorcios",
					columns : [ {
						'fieldId' : 'nombre',
						'fieldName' : 'Nombre',
						'fieldType' : 'text'
					} ]	
			}, 
			'detailView':{
				title : "Detalles del consorcio",
				fields : [ {
					'fieldId' : 'nombre',
					'fieldName' : 'Nombre',
					'fieldType' : 'text',
					'fieldDefaultValue':'Consorcio Nuevo'
				}, {
					'fieldId' : 'unidadFuncional',
					'fieldName' : 'Unidades Funcionales',
					'fieldType' : 'oneToMany',
					'fieldClickeable':'true',
					'relationshipDescriptor' : [ {
						'fieldId' : 'nombre',
						'fieldName' : 'Nombre',
						'fieldType' : 'text'
					} ]
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
				} ]
			}
		};
		
		return viewDescriptorRepository;
	}(viewDescriptorRepository));
	
	return viewDescriptorRepository;
});