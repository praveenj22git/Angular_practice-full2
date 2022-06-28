/// <reference path="angular.min.js" />
/*var app = angular
    .module("Demo", ["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "Templates/home.html",
                controller: "homeController"
            })
            .when("/courses", {
                templateUrl: "Templates/courses.html",
                controller: "coursesController"
            })
            .when("/students", {
                templateUrl: "Templates/students.html",
                controller: "studentsController"
            })
            .when("/studentsSearch/:name?", {
                templateUrl: "Templates/studentsSearch.html",
                controller: "studentsSearchController",
                controllerAs: "studentsSearchCtrl",

                    resolve: {
                    studentslist: function ($http) {
                        return $http.get("StudentService.asmx/GetAllStudents")
                            .then(function (response) {
                                return response.data;
                            })
                    }
                }
            })

    })*/
var app = angular
    .module("Demo", ["ui.router"])
    .config(function ($stateProvider) {

        $stateProvider
            .state("home", {
                url: "/home",
                templateUrl: "Templates/home.html",
                controller: "homeController",
                controllerAs: "homeCtrl"
            })
            .state("courses", {
                url: "/courses",
                templateUrl: "Templates/courses.html",
                controller: "coursesController",
                controllerAs: "coursesCtrl"
            })

            .state("students", {
                url: "/students",
                templateUrl: "Templates/students.html",
                controller: "studentsController",
                controllerAs: "studentsCtrl",
                resolve: {
                    studentslist: function ($http, $location) {
                        return $http.get("StudentService.asmx/GetAllStudents")
                            .then(function (response) {
                                return response.data;
                            })
                    }
                }
            })
    })
    .controller("studentsController", function (studentslist, $state, $location) {
        var vm = this;

        vm.studentSearch = function () {
            if (vm.name)
                $location.url("/studentsSearch/" + vm.name)
            else
                $location.url("/studentsSearch")
        }

        vm.reloadData = function () {
            $state.reload();
        }

        vm.students = studentslist;
    })
  /*  .controller("homeController", function ($scope) {
        $scope.message = "Home Page";
    })
    .controller("coursesController", function ($scope) {
        $scope.courses = ["C#", "VB.NET", "ASP.NET", "SQL Server"];
    })
    .controller("studentsSearchController", function ($http, $routeParams) {
        var vm = this;

        if ($routeParams.name) {
            $http({
                url: "StudentService.asmx/GetStudentsByName",
                method: "get",
                params: { name: $routeParams.name }
            }).then(function (response) {
                vm.students = response.data;
            })
        }
        else {
            $http.get("StudentService.asmx/GetAllStudents")
                .then(function (response) {
                    vm.students = response.data;
                })
        }
    })

    .controller("studentsController", function ($scope, $http, $location) {

        vm.studentSearch = function () {
            if (vm.name)
                $location.url("/studentsSearch/" + vm.name)
            else
                $location.url("/studentsSearch")
        }

        vm.reloadData = function () {
            $route.reload();
        }

        vm.students = studentslist;*/
   /* $rootScope.$on("$locationChangeStart", function () {
        $log.debug("$locationChangeStart fired");
    });

    $rootScope.$on("$routeChangeStart", function () {
        $log.debug("$routeChangeStart fired");
    });

    $rootScope.$on("$locationChangeSuccess", function () {
        $log.debug("$locationChangeSuccess fired");
    });

    $rootScope.$on("$routeChangeSuccess", function () {
        $log.debug("$routeChangeSuccess fired");
    });


    $scope.$on("$routeChangeStart", function (event, next, current) {
        $log.debug("RouteChangeStart Event");
        $log.debug(event);
        $log.debug(next);
        $log.debug(current);
    });

    $scope.$on("$locationChangeStart", function (event, next, current) {
        $log.debug("LocationChangeStart Event");
        $log.debug(event);
        $log.debug(next);
        $log.debug(current);
    });

  vm.studentSearch = function () {
        if (vm.name)
            $location.url("/studentsSearch/" + vm.name)
        else
            $location.url("/studentsSearch")
    }
    vm.studentSearch = function () {
    if (vm.name)
        $location.url("/studentsSearch/" + vm.name)
    else
        $location.url("/studentsSearch")
}

  vm.studentSearch = function () {
        if (vm.name)
            $location.url("/studentsSearch/" + vm.name)
        else
            $location.url("/studentsSearch")
    }
    .controller("studentsSearchController", function ($http, $routeParams) {
    var vm = this;

    if ($routeParams.name) {
        $http({
            url: "StudentService.asmx/GetStudentsByName",
            method: "get",
            params: { name: $routeParams.name }
        }).then(function (response) {
            vm.students = response.data;
        })
    }
    else {
        $http.get("StudentService.asmx/GetAllStudents")
                    .then(function (response) {
                        vm.students = response.data;
                    })
    }

        var vm = this;
        vm.reloadData = function () {
            $route.reload();
        }*/
   /* .controller("studentsController", function ($http, $route, $scope) {
        var vm = this;

        $scope.$on("$routeChangeStart", function (event, next, current) {
            if (!confirm("Are you sure you want to navigate away from this page")) {
                event.preventDefault();
            }
        });*/

        $scope.$on("$routeChangeStart", function (event, next, current) {
            if (!confirm("Are you sure you want to navigate away from this page to "
                + next.$$route.originalPath)) {
                event.preventDefault();
            }
        });

$scope.$on("$locationChangeStart", function (event, next, current) {
    if (!confirm("Are you sure you want to navigate away from this page to " + next)) {
        event.preventDefault();
    }
});
       /* $http.get("StudentService.asmx/GetAllStudents")
            .then(function (response) {
                $scope.students = response.data;*/


                $http.get("StudentService.asmx/GetAllStudents")
                    .then(function (response) {
                        vm.students = response.data;
            })
    })
