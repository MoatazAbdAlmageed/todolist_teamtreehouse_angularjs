/**
 * Created by Moataz on 12/20/16.
 */


myApp.service('todosService', function ($http) {



    // ################################################ Create
    this.createTodo = function () {
        console.log('createTodo');
    };


    // ################################################ Read
    this.getTodos = function (callback) {
        $http.get('data/todos.json').then(callback)
    }


    // ################################################ Update
    this.editTodo = function () {

        console.log('edittodo please');

        //
        // if (this.todo.editing  == true) {
        // this.todo.editing = false;
        //
        // }

    };


    // ################################################ Delete
    this.deleteTodo = function (todo) {
        // ################################################### Notification

        Notification.success({
            message: 'todo ' + todo + " deleted",
            positionY: 'bottom',
            positionX: 'right'
        });

    };


});



