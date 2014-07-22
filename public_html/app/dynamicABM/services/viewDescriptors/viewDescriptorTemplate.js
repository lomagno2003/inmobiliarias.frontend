define(['dynamicABM/services/viewDescriptors/viewDescriptorRepository'], function (viewDescriptorRepository) {
	var viewDescriptorRepository = (function(viewDescriptorRepository){
		viewDescriptorRepository['viewName'] = {
		'idField':'idField',
		'reportName':'reportName',											//If this field is not present, the CrearReporte button is invisible
		'listView' : {
				title : "title",
				columns : [ {
					'columnId' : 'columnId1',
					'columnName' : 'columnName1'
				} ]	
		}, 'detailView' : {
			title : "title",
			fields : [ {
				'fieldId' : 'fieldId1',
				'fieldName' : 'fieldName1',
				'fieldType' : 'fieldType1',
				'fieldDisabled':'true',										//This make the field as disabled
				'fieldClickeable':'true',
			}, {
				'fieldId' : 'fieldId2',
				'fieldName' : 'fieldName2',
				'fieldType' : 'manyToOne',
				'fieldInRequest':'true',									//This says that the array of values is stored in the element, and not through de URI
				'fieldDisabled':'true',										//This disallow the Cambiar button
				'relationshipDescriptor' :  
				    {
						'fieldId' : 'fieldId',
						'fieldName' : 'fieldName',
						'fieldType' : 'fieldType'	
				    }
			}, {
				'fieldId' : 'fieldId3',
				'fieldName' : 'fieldName3',
				'fieldType' : 'oneToMany',
				'fieldDisabled':'true',										//This disallow the Crear button
				'relationshipDescriptor' :  [
					{
						'fieldId' : 'fieldId1',
						'fieldName' : 'fieldName1',
						'fieldType' : 'fieldType1'	
					},
				    {
						'fieldId' : 'fieldId2',
						'fieldName' : 'fieldName2',
						'fieldType' : 'fieldType2'	
				    }]
			}]
		}
	};
		
		return viewDescriptorRepository;
	}(viewDescriptorRepository));
	
	return viewDescriptorRepository;
});