require.config({
    baseUrl: "app/",
    
    // alias libraries paths.  Must set 'angular'
    paths: {
        'angular': 'http://ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular.min',
        'angular-route': 'http://ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular-route.min',
        'angularAMD': 'http://cdn.jsdelivr.net/angular.amd/0.1.1/angularAMD.min',
        'restangular': 'http://cdn.jsdelivr.net/restangular/latest/restangular.min',
        'loadash': 'http://cdn.jsdelivr.net/lodash/2.1.0/lodash.compat.min'
    },
    
    // Add angular modules that does not support AMD out of the box, put it in a shim
    shim: {
        'angularAMD': ['angular'],
        'angular-route': ['angular'],
    	'restangular': ['angular','loadash']
    },
    
    // kick start application
    deps: ['app']
});