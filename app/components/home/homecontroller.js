angular.module("myApp").controller("homectrl", function ($scope)
{
    $scope.msg = "This message is from home controller";

    $scope.checkMethod = function (valuefromview) {


        alert('Value from View   ' + valuefromview);

    }

});
