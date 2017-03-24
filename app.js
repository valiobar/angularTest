/**
 * Created by Kvaba on 3/22/2017.
 */
angular.module('myApp',['ngRoute','myApp.controller','firebase','myApp.services','ngMessages'])
    .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
        $routeProvider.when('/home',{
            templateUrl: 'views/home.html',
            controller: 'homeController'
        });
        $routeProvider.when('/goToHell',{
            templateUrl: 'views/goToHell.html',

        });

        $routeProvider.otherwise({redirectTo: '/'});
    }])



