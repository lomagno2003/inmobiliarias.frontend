var myApp = angular.module('myApp');

myApp.service('PropietariosService', function($resource) {
	this.viewListStructure = {
			title : "Detalles del propietario",
			columns : [ {
				'columnId' : 'nombre',
				'columnName' : 'Nombre'
			}, {
				'columnId' : 'dni',
				'columnName' : 'DNI'
			}]	
	};
	
	this.viewStructure = {
		title : "Detalles del propietario",
		fields : [ {
			'fieldId' : 'nombre',
			'fieldName' : 'Nombre',
			'fieldType' : 'text'
		}, {
			'fieldId' : 'dni',
			'fieldName' : 'DNI',
			'fieldType' : 'text'
		}, {
			'fieldId' : 'direccion',
			'fieldName' : 'Direccion',
			'fieldType' : 'text'
		}, {
			'fieldId' : 'telefonoFijo',
			'fieldName' : 'Telefono',
			'fieldType' : 'text'
		}, {
			'fieldId' : 'telefonoMovil',
			'fieldName' : 'Movil',
			'fieldType' : 'text'
		}, {
			'fieldId' : 'email',
			'fieldName' : 'Correo Electronico',
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