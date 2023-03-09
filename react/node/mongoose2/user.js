const mongoose=require('mongoose')
const addressShema=new mongoose.Schema({street:String,city:String,})
const userSchema=new mongoose.Schema({

name:{type:String,required:true,lowercase:true,maxLength:10},
age:{type:Number,min:1,max:100,
validate:{validator:v=>v%2===0,message:props=>`${props.value} is not a even number`}
},
email:String,
createAt:{
    type:Date,default:()=>Date.now(),
    immutable:true,

},
updateAt:{type:Date,default:()=>Date.now()},
bestFriend:{type:mongoose.SchemaTypes.ObjectId,ref:'user'},
hobbies:[String],
address:addressShema
})

 userSchema.methods.sayHi=function(){
    console.log(`hi my name is ${this.name}`)
 }
 userSchema.statics.findByName=function(name){
    return this.find({name:new RegExp(name,'i')})
 }
 userSchema.query.ByName=function(name){
    return this.where({name:new RegExp(name,'i')})
 }
 userSchema.virtual('namedEmail').get(function(){

    return `${this.name} <${this.email}>`
 })


module.exports=mongoose.model('user',userSchema)