var app = angular.module('customPage');

app.directive('specializationsDirective', function(specializationsService){
  return {
    scope: {
    },
    restrict: "E",
    templateUrl: 'js/templates/specializationsDirective.html',
    controller : function ($scope,$timeout){
      
      var sd = this;
      sd.whoList = {};
      var promise = specializationsService.getText();
      promise.then(function(data) {
          sd.specializationsList = data.data;
      });
      
      $scope.sd = sd;
    }
  }
});