const express=require('express')
const app=express();
const port = 4000;



app.set('view engine', 'ejs');
app.use(express.static('public'))
// app.get('/',(req,res)=>{
// res.render('index',)})
// app.get('/hello', function(req, res)
// {  res.end('Hello World');  
// });
// app.get('/name/:user_name', function(req,res) {
//     res.status(200);
//     res.set('Content-type', 'text/html');
//     res.send('<html><body>' +
//     '<h1>Hello ' + req.params.user_name + '</h1>' +
//     '</body></html>'
//     );
//   });
//    // POST method route 
//  app.post('/', function (req, res) {
//     res.send('POST request to the homepage');
//   })
//RES.DOWNLOAD('express1.js')
//res.status(500).json({message:'error'})
//par default status est 200  

//app.use(logger)




 const userRouter=require('./routes/users')
app.use('/users',userRouter)

// function logger(req,res,next){
// console.log(req.originalUrl)
// next()
// }




app.listen(port, function() {
    console.log('The server is running, ' +
        ' please, open your browser at http://localhost:%d', 
        port);
  });


