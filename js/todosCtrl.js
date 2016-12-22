/**
 * Created by Moataz on 12/20/16.
 */


myApp.controller('todosCtrl', ['$scope', 'todosService', 'Notification', function ($scope, todosService, Notification) {



    // ################################################ get todos
    todosService.getTodos(function (response) {
        console.log(response.data);
        $scope.todos = response.data;



    });




    // ################################################ create new todo

    $scope.createTodo = function (todo) {

        //
        if (todosService.createTodo(todo)) {

            $scope.todos.push(todo);

            Notification.success({
                message: '<b>' + todo.title + '</b> created successfully ',
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






    // ################################################ Save

    $scope.saveTodo = function (index, todo) {


        if (todosService.saveTodo(index)) {






            Notification.success({
                message: '<b>' + todo + '</b> saved successfully ',
                positionY: 'bottom',
                positionX: 'right'
            });

        }
        else {
            Notification.error({
                message: 'error occurred during saving <b>' + todo + '</b>',
                positionY: 'bottom',
                positionX: 'right'
            });
        }

    };


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


        $scope.todos.splice(index, 1);

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