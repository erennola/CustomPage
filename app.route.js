var app = angular.module('customPage.routes',['ngRoute']);

app.config(['$routeProvider',function($routeProvider){
  $routeProvider
    .when('/',{
      templateUrl: "views/home.html",
      controller: "homeController",
      controllerAs: "home"
    })
    .when('/About-Us',{
      templateUrl: "views/aboutUs.html",
      controller: "aboutController",
      controllerAs: "about"
    });
}]);
