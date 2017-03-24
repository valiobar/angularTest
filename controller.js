angular.module("myApp.controller", [])

    .controller("hellController", ["$scope", '$location', function ($scope, $location) {
        $scope.goHome = function () {
            $location.path("/home")
        }


    }])
    .controller("homeController", ["$scope", function ($scope) {
        $scope.home = 'welcome';

        $scope.openForm=function () {
            $scope.viewForm=true;
            console.log('Show form ')
        };

    }])


    .controller('firebaseController', ['$scope', '$firebaseArray', '$q', "$firebaseObject",'fireFactory',
        function ($scope, $firebaseArray, $q, $firebaseObject,fireFactory) {

            $scope.feedback ={};
            $scope.submitForm = function () {
                if(!$scope.user.termsOfUse){
                    $scope.user.termsOfUse ='no';
                }
               fireFactory.addUserWithComment($scope.user,$scope.feedback)
            }
    }]);



