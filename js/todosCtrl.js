"use strict";
/**
 * Created by Moataz on 12/20/16.
 */


myApp.controller('todosCtrl', ['$scope', 'todosService', 'Notification', function ($scope, todosService, Notification) {


    $scope.done_todos = [

        {"title": "visit my uncle"},
    ];


    $scope.successMessages = [
        {msg: 'Awesome'},
        {msg: 'Your sincere efforts..'},
        {msg: 'Well Done..'},
        {msg: 'Greate'},
        {msg: 'Congrats !!'},
        {msg: 'You deserve it ..'},
        {msg: 'Congratulations'},
        {msg: 'Well done'},
        {msg: 'You did it'},
    ];

    $scope.dangerMessages = [
        {msg: 'opps'},
        {msg: 'bad'},
        {msg: 'soory'},
    ];

    $scope.randomQuote = $scope.successMessages[Math.floor(Math.random() * $scope.successMessages.length)];
    $scope.randomDangerQuote = $scope.dangerMessages[Math.floor(Math.random() * $scope.dangerMessages.length)];


    // ################################################ get todos
    todosService.getTodos(function (response) {
        $scope.todos = response.data;


    });


    // ################################################ create new todo

    $scope.createTodo = function (todo) {
        if (todo == null) {
            Notification.error({
                message: 'Please write todo first',
                positionY: 'bottom',
                positionX: 'right'
            });
        }
        else {
            // re call randomQuote to get new randomQuote
            $scope.randomQuote = $scope.successMessages[Math.floor(Math.random() * $scope.successMessages.length)];

            var todo = {title: todo}
            $scope.todos.push(todo);


            // empty new_todo input
            //javascript - Clear text input on click with AngularJS - Stack Overflow
            $scope.new_todo = null;
            Notification.success({
                message: '<b>' + todo.title + '</b> created successfully ',
                positionY: 'bottom',
                positionX: 'right'
            });

        }


    };


    // ################################################ doneTodo

    $scope.doneTodo = function (index, todo) {


        if (todosService.doneTodo(index)) {


            //move todo to done todos
            $scope.done_todos.push(todo);

            $scope.todos.splice(index, 1);


            Notification.success({
                message: '<b>' + todo.title + '</b> completed successfully ',
                positionY: 'bottom',
                positionX: 'right'
            });

        }
        else {
            Notification.error({
                message: 'error occurred during moving <b>' + todo.title + '</b> to done',
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




    // ################################################ moveToIncomplete
    $scope.moveToIncomplete = function (index, todo) {


        $scope.done_todos.splice(index, 1);
        $scope.todos.push(todo);

        if (todosService.moveToIncomplete(index)) {

            Notification.success({
                message: '<b>' + todo.title + '</b> Moved to Incomplete successfully ',
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