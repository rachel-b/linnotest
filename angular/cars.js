var app = angular.module('myApp', []);



app.filter("geturl",function(){
	return function(car){
		return "try";
	}
})

// angular.module('phonecatFilters', []).filter('checkmark', function() {
//   return function(input) {
//     return input ? '\u2713' : '\u2718';
//   };
// });



function getCars($scope,$http) {
    $http.get("http://linnotest.localhost:8082/cars")
    .success(function(response) {$scope.cars = response;});
}

