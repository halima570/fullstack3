const  Todo = require("./todoModel");
const EmailModel= require("./email")
const UserModel=require('./User')
// listAllTodos function - To list all todos


let model = new UserModel()
model.fullName = 'Thomas Anderson'
console.log(model.toJSON())  // Output model fields as JSON
console.log()
console.log(model.fullName) 

let initials = model.getInitials()
console.log(initials)

UserModel.getUsers()
  .then(docs => {
    console.log(docs)
  })
  .catch(err => {
    console.error(err)
  })
  
exports.listAllTodos=(req, res) => {
    // Todo.find({}, (err, todo) => {
    // if (err) {
    // res.status(500).send(err);
    // }
    // res.status(200).json(todo);
    // });


   // Output the full name

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
    exports.createEmail = async (req, res) => {
      EmailModel.create({
        email: 'ada.lovelace@gmail.com'
      })
         .then(doc => {
          res.send(doc)
            })
         .catch(err => {
      res.send(err)   })
      };

exports.findemail=async (req,res)=>{
EmailModel
.find({
  email: 'ada.lovelace@gmail.com'   // search query
})
.then(doc => {
  res.send(doc)
})
.catch(err => {
  res.send(err)
})}

exports.findandupdate=async (req,res)=>{
  EmailModel
  .findOneAndUpdate(
    {
      email: 'ada.lovelace@gmail.com'  // search query
    }, 
    {
      email: 'theoutlander@live.com'   // field:values to update
    },
    {
      new: true,                       // return updated doc
      runValidators: true              // validate before update
    })
  .then(doc => {
    res.send(doc)
  })
  .catch(err => {
    res.send(err)
  })
}

exports.findandremove=async (req,res)=>{
  EmailModel
  .findOneAndRemove({
    email: 'theoutlander@live.com'
  })
  .then(response => {
   res.send(response)
  })
  .catch(err => {
    res.send(err)
  })


}


      exports.deleteTodo = async (req, res) => {
        try {
          await Todo.deleteOne({ _id: req.params.id });
          res.send("Todo successfully deleted" );
        } catch (err) {
          res.status(404).send(err);
        }
      };


  
