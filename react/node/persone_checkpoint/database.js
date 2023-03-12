// Export mongoose
const  mongoose = require("mongoose");
require('dotenv').config();
//const {MONGODB_URI}=process.env;
//Assign MongoDB connection string to Uri and declare options settings
// Declare a variable named option and assign optional settings
const  options = {
useNewUrlParser:  true,
useUnifiedTopology:  true
};
var uri='mongodb+srv://halima:halima.123@cluster0.feqpuuh.mongodb.net/?retryWrites=true&w=majority'
// Connect MongoDB Atlas using mongoose connect method
mongoose.connect(uri, options).then(() => {
console.log("Database connection SUCCESFULY");
},
err  => {
{
console.log("Error connecting Database instance due to:", err);
}
});