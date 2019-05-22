angular.module("myApp").directive("matrix", function () {
    return {
        restrict: "E",
        scope: {
            details: '=',
        
            
        },

        templateUrl: "app/components/pmbok/matrixtemplate.html",

        link: function ($scope, element, attrs) {

           
            $scope.description="";

            $scope.getcolor = function (name) {
                if (name == "Initiating")
                    return { 'background-color': '#9CCC65' };
                if (name == "Planning")
                    return { 'background-color': '#BA68C8' };
                if (name == "Executing")
                    return { 'background-color': '#D4E157' };
              if (name == "Monitoring and Controlling")
                    return { 'background-color': '#FFA726' };
                    if (name == "Closing")
                    return { 'background-color': '#8D6E63' };
            }


            $scope.setdescription=function (description){


                $scope.description=description;

            };
            $scope.getdescription=function (){


              return  $scope.description;

            };
            
        }
    }


     // template : "<select ng-model="+"selectedName " +"ng-options= 'item.KnowledgeArea for item in {{details}}'"+"></select>"
    
  });