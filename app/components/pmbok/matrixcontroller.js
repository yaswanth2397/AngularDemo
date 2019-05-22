angular.module("myApp")
.controller("matrixctrl", ['$scope', function ($scope)
{

    $scope.msg = "This message is from matrix controller";

    $scope.values=[];

    $.getJSON( "matrix.json", function(data,status) {
        $scope.values=data;
        console.log(status);
      });
        

   

}]);
