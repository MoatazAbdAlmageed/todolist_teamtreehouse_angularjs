/**
 * Created by Moataz on 11/28/16.
 */


var myApp = angular.module('todoListApp',[]);


myApp.controller('GreetingController', ['$scope', function($scope) {
    $scope.task = 'Hola!';
}]);
