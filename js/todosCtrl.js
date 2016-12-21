/**
 * Created by Moataz on 12/20/16.
 */


myApp.controller('todosCtrl', ['$scope', 'todosService', 'Notification', function ($scope, todosService, Notification) {



    // ################################################ Save

    $scope.saveTodo = function (todo) {


        if (todosService.saveTodo(todo)) {

            Notification.success({
                message: '<b>' + todo.title + '</b> saveed successfully ',
                positionY: 'bottom',
                positionX: 'right'
            });

        }
        else {
            Notification.error({
                message: 'error occurred during saving <b>' + todo.title + '</b>',
                positionY: 'bottom',
                positionX: 'right'
            });
        }

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
    $scope.deleteTodo = function (index, todo) {


        if (todosService.deleteTodo(index)) {

            Notification.success({
                message: '<b>' + todo + '</b> deleted successfully ',
                positionY: 'bottom',
                positionX: 'right'
            });

        }
        else {
            Notification.error({
                message: 'error occurred during deleting tod',
                positionY: 'bottom',
                positionX: 'right'
            });
        }

    };


}]);