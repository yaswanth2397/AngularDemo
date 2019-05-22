angular.module('myApp')
    .factory('employeedatafactory', ['$http', function ($http) {

        var urlBase = 'http://dummy.restapiexample.com/api/v1';
        var dataFactory = {};

        dataFactory.getEmployees = function () {
            return $http.get(urlBase + '/employees');
        };

        dataFactory.getEmployee = function (id) {
            return $http.get(urlBase + '/employee/' + id);
        };

        dataFactory.createEmployee = function (employee) {
            return $http.post(urlBase + '/create', employee);
        };

        dataFactory.updateEmployee = function (employee) {
            return $http.put(urlBase + '/update/' + employee.id, employee)
        };

        dataFactory.deleteEmployee = function (id) {
            return $http.delete(urlBase + '/delete/' + id);
        };


        return dataFactory;
    }]);

