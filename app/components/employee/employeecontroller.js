angular.module("myApp").controller("empctrl", ['$scope', 'employeedatafactory', function ($scope, employeedatafactory) {
    $scope.msg = "This message is from employee controller";

    $scope.checkMethod = function (valuefromview) {


        alert('Value from View   ' + valuefromview);

    }

    $scope.emp = {};
    $scope.isadd = true;
    getEmployees();

    function getEmployees() {
        employeedatafactory.getEmployees()
            .then(function (response) {
                $scope.employees = response.data;
            }, function (error) {
                $scope.status = 'Unable to load employee data: ' + error.message;
            });
    }

    $scope.add = function()
    {

        $scope.emp = {};

    }

    $scope.Edit = function (employee) {

        $scope.emp.name = employee.employee_name;

        $scope.emp.age = employee.employee_age;
        $scope.emp.salary = employee.employee_salary; 

        $('#exampleModal').modal('show');

    }


    $scope.delete = function (employee)
    {

        employeedatafactory.deleteEmployee(employee.id)
            .then(function (response) {
                $scope.status = 'Dleted Record';
               // $('#exampleModal').modal('hide');
                getEmployees();
            }, function (error) {
                $scope.status = 'Unable to delete employee: ' + error.message;
            });



    }



    $scope.submitEmployee = function (employee) {


        console.log(employee);

        employee.age = parseInt(employee.age);
        employee.salary = parseInt(employee.salary);

        if ($scope.isadd) {

            employeedatafactory.createEmployee(employee)
                .then(function (response) {
                    $scope.status = 'Inserted Employee! Refreshing customer list.';
                    $('#exampleModal').modal('hide');
                    getEmployees();
                }, function (error) {
                    $scope.status = 'Unable to insert employee: ' + error.message;
                });

        }
        else {

            employeedatafactory.updateEmployee(employee)
                .then(function (response) {
                    $scope.status = 'Update Employee! Refreshing customer list.';
                    $('#exampleModal').modal('hide');
                    getEmployees();
                }, function (error) {
                    $scope.status = 'Unable to update employee: ' + error.message;
                });


        }

       


    }

    $scope.values=["sdf","hsdfjkk","sdhfkld"];

}]).filter('reverse', function () {
    return function (items) {
        if(items)
        return items.slice().reverse();
    };
});
