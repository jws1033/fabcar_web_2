var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var ejs = require('ejs')
var app = express()
require('dotenv').config()

var apiRouter = require('./routes/Router')

app.set('views', path.resolve(__dirname + '/views'))
app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public'))

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())



var cors = require('cors')
app.use(cors())

app.use('/', apiRouter)


var port = process.env.PORT || 3000
app.listen(port , ()=>{
    console.log(`Server is Starting at http://localhost:${port}`)
})