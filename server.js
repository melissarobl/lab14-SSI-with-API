const express = require('express')  //import express
const apiRoutes = require('./routes/api')

const app = express()  //making a new express app
app.use(express.json())  //handle json coming in

app.use('/api', apiRoutes)

app.use(function(req, res, next){
    // can't find a matching route
    res.status(404).send('Sorry, not found')
})


//this will handle database errors
app.use(function(err, req, res, next) {
    console.log(err)
    res.status(500).send('Server error')
})


const server = app.listen(process.env.PORT || 3000, function() {
    console.log('Express server running on port ', server.address().port)
})  //start server running


