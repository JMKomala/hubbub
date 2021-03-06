const express = require('express')
const app = express()
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const router = require('./app/routes')

// initialize dotenv

// set our port
const port =  8080

// get all data/stuff of the body (POST) parameters
// parse application/json
app.use(bodyParser.json())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}))

// register routes
app.use(router)



app.listen(port,console.log(`Magic happens on port: ${port}`))
   