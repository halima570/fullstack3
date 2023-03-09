const  Todo = require("./todoModel");

// listAllTodos function - To list all todos
exports.listAllTodos=(req, res) => {
    // Todo.find({}, (err, todo) => {
    // if (err) {
    // res.status(500).send(err);
    // }
    // res.status(200).json(todo);
    // });

Todo.find({})
.then((todo)=>res.send(todo))
.catch(err=>res.send(err))

    };

// createNewTodo function - To create new todo
exports.createNewTodo = (req, res) => {
    Todo.create(req.body)
    .then((todo)=> res.send(todo))
    .catch(err=>res.send(err));
    };

    // // updateTodo function - To update todo status by id
    // exports.updateTodo = (req, res) => {
    // Todo.findOneAndUpdate({ _id:req.params.id },req.body,{ new:true },(err))
    // .then((todo)=> res.send(todo))
    // .catch(err=>res.send(err))
    // };

    exports.updateTodo = async (req, res) => {
        try {
          const todo = await Todo.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
          res.send(todo);
        } catch (err) {
          res.status(500).send(err);
        }
     };

    // // deleteTodo function - To delete todo by id
    // exports.deleteTodo = async ( req, res) => {
    // await  Todo.deleteOne({ _id:req.params.id },(err))
    // .then(()=> res.send("Todo successfully deleted"))
    // .catch(err=>res.send(err))
    // };
    exports.deleteTodo = async (req, res) => {
        try {
          await Todo.deleteOne({ _id: req.params.id });
          res.send("Todo successfully deleted" );
        } catch (err) {
          res.status(404).send(err);
        }
      };

