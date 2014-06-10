var myApp = angular.module('myApp');

myApp.service('PropiedadesService', function($resource) {
	this.viewStructure = {
		title : "Detalles de la propiedad",
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