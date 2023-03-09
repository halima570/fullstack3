const mongoose=require('mongoose')
const user=require('./user')
mongoose.connect('mongodb://127.0.0.1:27017/myapp').then(() => {
    console.log("Database connection successfully")})
   .catch((err)=>{console.log(err)})
  

async function run(){   
// const user1 = new user({name:'halima',age:21})
// await user1.save()
try{const user1=await user.findOne({name:'halima'})
    //.where('name').equals('halima').populate('bestFriend')
//user1.bestFriend='640903e9d216ed8c7c773de5'

    //.where('name').equals('halima').where('age').gt(12).limit(2).select('age')
    //
    //.findById('640903e9d216ed8c7c773de5')
// .create({
//     name:'halima'
// ,age:4,
// hobbies:['sing,cooking,write']
// ,address:{street:'ainsbaa'}})
console.log(user1)
console.log(user1.namedEmail)
//user1.sayHi()
}catch(e){console.log(e.message)}
}
 run() 