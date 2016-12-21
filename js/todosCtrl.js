/**
 * Created by Moataz on 12/20/16.
 */


myApp.controller('todosCtrl', ['$scope','todosService', function($scope,todosService) {



    // ################################################ Create
    $scope.saveTodo = function () {
        console.log('saveTodo');
    } ;


    // ################################################ Read
    todosService.getTodos(function (response) {
        console.log(response.data);
        $scope.todos =response.data;

    });
    // console.log(todosService.getTodos());



    // ################################################ Update
    $scope.editTodo = function () {

        console.log('edittodo please');

        //
        // if ($scope.todo.editing  == true) {
        // $scope.todo.editing = false;
        //
        // }

    };


    // ################################################ Delete
    $scope.deleteTodo = function () {
        console.log('deleteTodo');
    };




}]);