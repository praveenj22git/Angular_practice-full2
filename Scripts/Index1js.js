var app = angular
    .module("Demo", ["ui.router"])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/home", {
              /*  templateUrl: "Templates1/home.html",
                controller: "homeController"*/

                template1: "<h1>Inline Template in action</h1>",
                controller: "homeController",
                controllerAs: "homeCtrl"
            })
            .when("/courses", {
                templateUrl: "Templates1/courses.html",
                controller: "coursesController"
            })
    })
    .controller("homeController", function ($scope) {
        $scope.message = "Home Page";
    })
    .controller("coursesController", function ($scope) {
        $scope.courses = ["C#", "VB.NET", "ASP.NET", "SQL Server"];
    })
