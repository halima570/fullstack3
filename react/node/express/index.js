const express = require('express')
const app = express()

const errorHandler = (error, request, response, next) => {
  // Error handling middleware functionality
  console.log( `error halima ${error.message}`) // log the error
  const status = error.status || 400
  // send back an easily understandable error message to the caller
  response.status(status).send(error.message+'halima')
}

app.get('/products', async (request, response,next) => {
  try {
    const apiResponse = await axios.get("http://localhost:3001/products")

    const jsonResponse = apiResponse.data
    
    response.send(jsonResponse)

  } 
  catch(error) {
    next(error) // calling next error handling middleware
  }

})
app.use(errorHandler)
app.listen(3000, () => {
    console.log(`Example app listening on port ${3000}`)
  })