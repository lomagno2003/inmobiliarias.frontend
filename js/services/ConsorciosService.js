var myApp = angular.module('myApp');

myApp.service('ConsorciosService', function($resource) {
	this.viewListStructure = {
			title : "Detalles de la propiedad",
			columns : [ {
				'columnId' : 'nombre',
				'columnName' : 'Nombre'
			} ]	
	};
	
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
	};
});