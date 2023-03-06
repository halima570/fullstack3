const express = require('express');
const router = express.Router();

// post page route.
router.route('/post/:slug')
  .all(function(req, res, next) {
      // runs each time
      // we can fetch the post by id from the database
   }) 
  .get(function(req, res, next) {
      //render post
   })
   .put(function(req, res, next) {
      //update post
   })
   .post(function(req, res, next) {
      //create new comment 
   }) 
   .delete(function(req, res, next) { 
     //remove post 
   });

module.exports = router