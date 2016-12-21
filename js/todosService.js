/**
 * Created by Moataz on 12/20/16.
 */


myApp.service('todosService', function ($http) {



    // ################################################ save

    this.saveTodo = function (todo) {
        // save todo_with $index from backend
        console.log(todo);
        return false;

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
    this.deleteTodo = function ($index) {
        // delete todo_with $index from backend
        console.log($index);
        return true;

    };


});



