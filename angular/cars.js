var app = angular.module('myApp', []);


function getCars($scope,$http) {
    $http.get("http://linnotest.localhost:8082/cars")
    .success(function(response) {$scope.cars = response;});
}

