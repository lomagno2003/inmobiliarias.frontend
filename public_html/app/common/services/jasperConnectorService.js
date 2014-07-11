define(['app'],function(app){
	app.register.service('jasperConnectorService',function($routeParams,$location,constants) {
	    this.generateReport = function(reportName,body){
	    	var encodedBody = encodeURIComponent(JSON.stringify(body));
	    	var format = "pdf";
	    	var encodedReportName = encodeURIComponent(reportName);
	    	
	    	var path = constants.jasperServerURI.concat(format).concat("?reportName=").concat(encodedReportName).concat("&body=").concat(encodedBody);
	
	    	window.open(path);
	    };
	});
});