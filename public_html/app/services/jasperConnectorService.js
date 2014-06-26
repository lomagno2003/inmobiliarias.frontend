var myApp = angular.module('myApp');
 
myApp.service('jasperConnectorService',['$routeParams','$location',function($routeParams,$location) {
	
    this.generateReport = function(reportName,body){
    	var encodedBody = encodeURIComponent(JSON.stringify(body));
    	var format = "pdf";
    	var encodedReportName = encodeURIComponent(reportName);
    	
    	var path = "http://localhost:8081/jasper/report/".concat(format).concat("?reportName=").concat(encodedReportName).concat("&body=").concat(encodedBody);

    	window.open(path);
    };
}]);