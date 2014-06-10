var myApp = angular.module('myApp');

myApp.service('PropietariosService', function($resource) {
	this.viewStructure = {
		title : "Detalles del propietario",
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
		} ]
	};
});