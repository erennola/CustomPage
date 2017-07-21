var app = angular.module('customPage');

app.directive('contactDirective', function(contactService){
  return {
    scope: {
    },
    restrict: "E",
    templateUrl: 'js/templates/contactDirective.html',
    controller : function ($scope,$timeout){
      
      var cd = this;
      var promise = contactService.getText();
      promise.then(function(data) {
        console.log("data" + data);
          cd.contact = data.data;
      });
      
      $scope.cd = cd;
    }
  }
});