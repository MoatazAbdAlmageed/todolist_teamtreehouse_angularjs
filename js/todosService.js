/**
 * Created by Moataz on 12/20/16.
 */


myApp.service('todosService',function ($http) {

    this.getTodos = function (callback) {
        $http.get('/data/todos.json').then(callback)
    }

});


        // $http.get('/data/todos.json').then(function(response) {
        //     var data = response.data,
        //         status = response.status,
        //         header = response.header,
        //         config = response.config;
        // return data;
        //     // success handler
        // }, function(response) {
        //     var data = response.data,
        //         status = response.status,
        //         header = response.header,
        //         config = response.config;
        //     // error handler
        // });
        
        
        // $http.get('data/todos.json')
        //     .then(function (response) {
        //         // console.log(response.data);
        //         // return typeof (response.data);
        //         return response;
        //         // this callback will be called asynchronously
        //         // when the response is available
        //     }, function (response) {
        //         // called asynchronously if an error occurs
        //         // or server returns response with an error status.
        //     });
    // };



