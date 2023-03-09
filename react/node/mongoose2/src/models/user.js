let mongoose = require('mongoose')
let userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  createdAt: Date,
  updatedAt: Date,
})

userSchema.virtual('fullName').get(function() {
    return this.firstName + ' ' + this.lastName
  })
  userSchema.virtual('fullName').set(function(name) {
    let str = name.split(' ')
    
    this.firstName = str[0]
    this.lastName = str[1]
  })
  userSchema.methods.getInitials = function() {
    return this.firstName[0] + this.lastName[0]
  }
  userSchema.statics.getUsers = function() {
    return new Promise((resolve, reject) => {
      this.find((err, docs) => {
        if(err) {
          console.error(err)
          return reject(err)
        }
        resolve(docs)
      })
    })
  }
  userSchema.pre('save', function (next) {
  let now = Date.now()
   
  this.updatedAt = now
  // Set a value for createdAt only if it is null
  if (!this.createdAt) {
    this.createdAt = now
  }
  // Call the next function in the pre-save chain
  next()    
})
//////////////////////////////
  let model = new UserModel()
  model.fullName = 'Thomas Anderson'
  console.log(model.toJSON())  // Output model fields as JSON
  console.log()
  console.log(model.fullName)
////////////////////////////////////////////////////
  let model = new UserModel({
    firstName: 'Thomas',
    lastName: 'Anderson'
  })
  let initials = model.getInitials()
  console.log(initials) // This will output: TA////////////////

///////////////////////////////////////////

  UserModel.getUsers()
  .then(docs => {
    console.log(docs)
  })
  .catch(err => {
    console.error(err)
  })
  let UserModel = require('./user')
let model = new UserModel({
  fullName: 'Thomas Anderson'
})
msg.save()
   .then(doc => {
     console.log(doc)
   })
   .catch(err => {
     console.error(err)
   })
module.exports = mongoose.model('User', userSchema)