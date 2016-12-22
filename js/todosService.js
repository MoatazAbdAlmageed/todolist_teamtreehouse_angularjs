/**
 * Created by Moataz on 12/20/16.
 */


myApp.service('todosService', function ($http) {



    // ################################################ save

    this.saveTodo = function (index) {
        // save todo_with $index from backend
        console.log(index);
        return false;

    };



    // ################################################ Read
    this.getTodos = function (callback) {
        $http.get('data/todos.json').then(callback)
    }


    // ################################################ create
    this.deleteTodo = function ($index) {
        // delete todo_with $index from backend
        console.log($index);
        return true;

    };

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
    this.deleteTodo = function ($index) {
        // delete todo_with $index from backend
        console.log($index);
        return true;

    };


    // ################################################ createTodo
    this.createTodo = function (todo) {
        // ask back-end to insert new todo into Database
        console.log(todo);
        return true;

    };


});



