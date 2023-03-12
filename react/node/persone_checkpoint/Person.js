// Importing necessary libraries
const mongoose = require('mongoose');


// Creating a person schema
const personSchema = new mongoose.Schema({
name: { type: String, required: true },
age: Number,
favoriteFoods: [String],
});


// Creating a person model
module.exports= mongoose.model('Person', personSchema);