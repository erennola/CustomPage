var app = angular.module('customPage');
app.controller('navController',function($scope,$location){
  var vm = this;
  $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
});
