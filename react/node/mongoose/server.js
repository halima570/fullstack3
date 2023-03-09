'use strict'
// require express and bodyParser
const  express = require("express");
const  bodyParser = require("body-parser");
// create express app
const  app = express();
// Import API route
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
var routes = require('./todoRoutes'); //importing route
routes(app);

// define port to run express app
const  port = process.env.PORT || 3000;
// use bodyParser middleware on express app

// Add endpoint
require("./database.js");

// Listen to server
app.listen(port, () => {
console.log(`Server running at http://localhost:${port}`);
});