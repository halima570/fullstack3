let EmailModel = require('./email')
//let timestampPlugin = require('./plugins/timestamp')



EmailModel.create({
  email: 'ada.lovelace@gmail.com'
})
   .then(doc => {
    return doc
      })
   .catch(err => {
return err   })
//   EmailModel
//   .find({
//     email: 'ada.lovelace@gmail.com'   // search query
//   })
//   .then(doc => {
//     console.log(doc)
//   })
//   .catch(err => {
//     console.error(err)
//   })
// /////////////////////////////////////////////////////////////////////////////
//   EmailModel
//   .findOneAndUpdate(
//     {
//       email: 'ada.lovelace@gmail.com'  // search query
//     }, 
//     {
//       email: 'theoutlander@live.com'   // field:values to update
//     },
//     {
//       new: true,                       // return updated doc
//       runValidators: true              // validate before update
//     })
//   .then(doc => {
//     console.log(doc)
//   })
//   .catch(err => {
//     console.error(err)
//   })
// ////////////////////////////////////////////////////////


// EmailModel
//   .findOneAndRemove({
//     email: 'theoutlander@live.com'
//   })
//   .then(response => {
//     console.log(response)
//   })
//   .catch(err => {
//     console.error(err)
//   })


// emailSchema.plugin(timestampPlugin)
// userSchema.plugin(timestampPlugin)