'use strict';

// create App function
    module.exports = function(app) {
        var todoList = require('./todocontroller');

// todoList Routes

// get and post request for /todos endpoints
        app
        .route("/todos")
        .get(todoList.listAllTodos)
        .post(todoList.createNewTodo);

// put and delete request for /todos endpoints
        app
        .route("/todo/:id")
        .put(todoList.updateTodo)
        .delete(todoList.deleteTodo);


        app
        .route("/email")
        .post(todoList.createEmail)
        .get(todoList.findemail)
        .put(todoList.findandupdate)
        .delete(todoList.findandremove)
    };