
const todoRoutes = require('express').Router();
let Todo = require('../models/Todos');
let Users = require('../models/User');

module.exports = (app) => {
     
todoRoutes.route('/').get(function(req, res) {
    Todo.find(function(err, todos) {
        if (err) {
            console.log(err);
        } else {
            res.json(todos);
        }
    });
  });
  
  todoRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Todo.findById(id, function(err, todo) {
        res.json(todo);
    });
  });
  
  todoRoutes.route('/add').post(function(req, res) {
    let todo = new Todo(req.body);
    todo.save()
        .then(todo => {
            res.status(200).json({'todo': 'todo added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new todo failed');
        });
  });
  
  todoRoutes.route('/update/:id').post(function(req, res) {
    Todo.findById(req.params.id, function(err, todo) {
        if (!todo)
            res.status(404).send('data is not found');
        else
            todo.todo_description = req.body.todo_description;
            todo.todo_responsible = req.body.todo_responsible;
            todo.todo_priority = req.body.todo_priority;
            todo.todo_completed = req.body.todo_completed;
  
            todo.save().then(todo => {
                res.json('Todo updated');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
  });


todoRoutes.route('/signup').post((req,res)=>{
    let username = new Users(req.body);
    console.log(`username:${username}`);
    

    username.save()
    .then(username => {
        res.status(200).json({'username': 'added'});
    })
    .catch(err => {
        res.status(400).send('adding username failed');
    });

});

todoRoutes.route('/view').get((req,res)=>{
    users.find(function(err, users) {
        if (err) {
            console.log(err);
        } else {
            res.json(users);
        }
    });

})
  
  
  app.use('/todos', todoRoutes);
}