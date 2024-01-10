var app = angular.module('calculatorApp', []);

app.controller('CalculatorController', function ($scope, $http) {
    $scope.num1 = 0;
    $scope.num2 = 0;
    $scope.result = 0;

    $scope.addNumbers = function () {
        var numbers = {
            number1: $scope.num1,
            number2: $scope.num2
        };

        $http.post('http://localhost:8080/api/add', numbers)
            .then(function (response) {
                $scope.result = response.data;
            });
    };
});
