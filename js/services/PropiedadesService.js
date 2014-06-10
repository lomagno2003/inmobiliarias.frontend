var myApp = angular.module('myApp');

myApp.service('PropiedadesService', function($resource) {
	this.viewStructure = {
		fields : [ {
			'fieldId' : 'nombre',
			'fieldName' : 'Nombre',
			'fieldType' : 'text'
		}, {
			'fieldId' : 'direccion',
			'fieldName' : 'Direccion',
			'fieldType' : 'text'
		}, {
			'fieldId' : 'porcentajeGastosComunes',
			'fieldName' : 'Porcentaje de gastos comunes',
			'fieldType' : 'number'
		} ]
	};

});