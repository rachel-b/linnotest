var app = angular.module('myApp', []);


function getCars($scope,$http) {

    $scope.name = "rachli";
    $scope.cars = {};

    $http.get("http://linnotest.localhost:8082/all_cars")
    .success(function(response) {
    	$scope.cars = response;
    });
}











