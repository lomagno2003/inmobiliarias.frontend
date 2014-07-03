define(['app'], function (app) {
	app.register.controller('errorViewController', function($scope,$routeParams) {	
			$scope.errorId = $routeParams.errorId;
			
			switch($scope.errorId){
			case 'rest_server_offline':
				$scope.errorTitle = "El servidor REST se encuentra caido";
				$scope.errorMessage = "No se pudo establecer la comunicaciñón con el servidor, intentelo mas tarde";
				break;
			case 'jasper_server_offline':
				$scope.errorTitle = "El servidor Jasper se encuentra caido";
				$scope.errorMessage = "No se pudo establecer la comunicaciñón con el servidor, intentelo mas tarde";
				break;
			case 'not_found':
				$scope.errorTitle = "Pagina no encontrada";
				$scope.errorMessage = "No se pudo acceder a la pagina solicitada";
				break;
			default:
				$scope.errorTitle = "Error desconocido";
				$scope.errorMessage = "Se ah producido un error desconocido, contactese con el administrador";
				break;
			};
		}
	);
});