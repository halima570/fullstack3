const bodyParser = require('body-parser');
const express = require('express')
const app = express()
app.set('view engine', 'pug');
app.set('views','./views');
//To parse URL encoded data
// app.use(bodyParser.urlencoded({ extended: false }))


// //To parse json data
// app.get('/',(res,req)=>{
// res.send(bodyParser.json())
// })

// var cookieParser = require('cookie-parser');
// app.use(cookieParser())
app.get('/', function(req, res){
    res.render('first_view');
});


app.listen(3000, () => {
    console.log(`Example app listening on port ${3000}`)
  })