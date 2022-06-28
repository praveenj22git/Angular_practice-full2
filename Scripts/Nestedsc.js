var app = angular
    .module("Demo", [])
    .controller("countryController", function ($scope) {
        $scope.name = "India";
    })
    .controller("stateController", function ($scope) {
        $scope.name = "Maharashtra";
    })
    .controller("cityController", function ($scope) {
        $scope.name = "Mumbai";
    });