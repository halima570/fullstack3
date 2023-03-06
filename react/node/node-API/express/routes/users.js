
const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.send('users list')
})

router.get('/new',(req,res)=>{
    res.render('users/new')
})

router.post('/',(req,res)=>{
    res.send(`user created`)
})



router.get('/:id',(req,res)=>{
    res.send(`user id is ${req.params.id}`)
})
router.delete('/:id',(req,res)=>{
    res.send(`user id deleted is ${req.params.id}`)
})

//router.route('/:id').get().put().delete()
router.param('id',(req,res,next,id)=>{
console.log(id)
next()
})




module.exports=router