var myApp = angular.module('myApp');

myApp.service('ConsorciosService', function($resource) {
	this.viewStructure = {
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
		} ]
	};
});