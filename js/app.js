/**
 * Created by Moataz on 11/28/16.
 */


var myApp = angular.module('todoListApp',[]);


myApp.controller('mainCtrl', ['$scope', function($scope) {
$scope.todos = [
    {"title" :"angularjs coues"},
    {"title" : "rails coues"},
    {"title" : "tie website"},
    {"title" : "lacreationarts website"},
    {"title" : "Kimai web application"},

];
    $scope.todo ={};
    // $scope.editlabel ="Edit";
    //
    // if ($scope.editing =true){
    // $scope.editlabel ="Save";
    // }
    // else    {
    //
    // $scope.editlabel ="Edit";
    // }


    $scope.saveTodo = function () {
        console.log('saveTodo');
    } ;  
    

    $scope.editTodo = function () {
        console.log('edittodo');
        //
        // if ($scope.todo.editing  == true) {
        // $scope.todo.editing = false;
        //
        // }


    };

    $scope.deleteTodo = function () {
        console.log('deletetodo');
    };

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