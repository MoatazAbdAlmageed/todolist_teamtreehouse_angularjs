/**
 * Created by Moataz on 12/20/16.
 */


myApp.controller('todosCtrl', ['$scope', 'todosService','Notification', function ($scope, todosService,Notification) {



    // ################################################ Save
    $scope.saveTodo = function () {

        Notification.success({
            message: 'Save',
            positionY: 'bottom',
            positionX: 'right'
        });



    };


    // ################################################ Read
    todosService.getTodos(function (response) {

        console.log(response.data);
        $scope.todos = response.data;

    });


    // ################################################ Update
    $scope.editTodo = function () {


        Notification.success({
            message: 'Update',
            positionY: 'bottom',
            positionX: 'right'
        });


        //
        // if ($scope.todo.editing  == true) {
        // $scope.todo.editing = false;
        //
        // }

    };


    // ################################################ Delete
    $scope.deleteTodo = function (todo) {

        if ($scope.todos.splice(todo, 1)) {

            Notification.success({
                message: 'todo ' + todo + " deleted",
                positionY: 'bottom',
                positionX: 'right'
            });

        }

    };


}]);