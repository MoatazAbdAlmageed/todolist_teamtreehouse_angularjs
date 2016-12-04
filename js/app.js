/**
 * Created by Moataz on 11/28/16.
 */


var myApp = angular.module('todoListApp',[]);


myApp.controller('mainCtrl', ['$scope', function($scope) {
$scope.todos = [
    {"name" :"angularjs coues"},
    {"name" : "rails coues"},
    {"name" : "tie website"},
    {"name" : "lacreationarts website"},
    {"name" : "Kimai web application"},

];
    $scope.todo ={};
    // $scope.editlabel ="Edit";
    $scope.todo.name = 'a simple todo!';
    //
    // if ($scope.editing =true){
    // $scope.editlabel ="Save";
    // }
    // else    {
    //
    // $scope.editlabel ="Edit";
    // }


    $scope.saveTodo = function () {
    } ;

    $scope.editTodo = function () {
        //
        // if ($scope.todo.editing  == true) {
        // $scope.todo.editing = false;
        //
        // }

        console.log('edittodo');
    };

    $scope.deleteTodo = function () {
        console.log('deletetodo');
    };

}]);

myApp.controller('newCtrl', ['$scope', function($scope) {
    $scope.whoIAm = function () {
        console.log('Iam a newCtrl');
    }
}]);



// myApp.directive("w3TestDirective", function() {
//     return {
//         template : "Made by a directive!",
//         restrict :"C",
//         restrict :"A",
//         restrict :"M",
//         restrict :"E",
//     };
// });