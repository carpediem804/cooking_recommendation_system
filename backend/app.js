const express = require('express')
const bodyParser = require('body-parser')

require('./db/mongo') //connect db
const findcook = require('./routes/findcook')
const upload = require('./routes/upload')
//const blogimage = require('/routes/blogimage')
const app = express()

app.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type")
    next()
})

//app.use('/upload', express.static('blogupload'));
app.use(express.static('uploads'));
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use('/findcook', findcook)
app.use('/upload', upload)
//app.use('/blogimage',express.static('blogimage'))

module.exports = app
