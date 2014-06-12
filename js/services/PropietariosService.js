var myApp = angular.module('myApp');

myApp.service('PropietariosService', function($resource) {
	this.viewListStructure = {
			title : "Detalles de la propiedad",
			columns : [ {
				'columnId' : 'nombre',
				'columnName' : 'Nombre'
			}]	
	};
	
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