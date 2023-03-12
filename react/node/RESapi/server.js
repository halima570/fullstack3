const express=require('express');
const app=express();
const port=4000;
const mongoose = require('mongoose');
const dotenv=require('dotenv').config();
const User = require('./models/User');
console.log(dotenv.parsed)

const  options = {useNewUrlParser:  true,useUnifiedTopology:  true};

    // Connect MongoDB Atlas using mongoose connect method
    mongoose.connect(process.env.MONGODB_URI, options).then(() => {
    console.log("Database connection established!");},
    err  => {
    {console.log("Error connecting Database instance due to:", err);}});



// GET all users
app.get('/users',async (req,res) => {
    const users = await User.find({});
res.send(users);
console.log(users);
})

app.post('/users', async (req, res) => {
     const user1=new User({
         name:'halima',email:'halimaelhagouchi3@gmail.com',password:'1234'
    })
   await res.send(user1)
   // await User.create(req.body).then(doc=>res.send(doc)).catch(err=>res.send(err))
    
  });
  app.put('/users/:id', async (req, res) => {
    const user = await User.findByIdAndUpdate({_id:req.params.id}, req.body, {new: true});
    res.send(user);
  });
  
  app.delete('/users/:id', async (req, res) => {
    await User.findByIdAndDelete({_id:req.params.id});
    res.sendStatus(201);
  });



app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})