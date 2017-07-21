var app = angular.module('customPage');

app.directive('whoDirective', function(whoService){
  return {
    scope: {
    },
    restrict: "E",
    templateUrl: 'js/templates/whoDirective.html',
    controller : function ($scope,$timeout){
      
      var wd = this;
      wd.whoList = {};
      var promise = whoService.getText();
      promise.then(function(data) {
          wd.whoList = data.data;
      });
      
      $scope.wd = wd;
    }
  }
});