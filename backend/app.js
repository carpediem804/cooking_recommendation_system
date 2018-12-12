const express = require('express')
const bodyParser = require('body-parser')
const path = require('path');

require('./db/mongo') //connect db
const findcook = require('./routes/findcook')
const upload = require('./routes/upload')
const deletepost = require('./routes/removeblog')
const like = require('./routes/like')
const app = express()

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../dist', 'index.html'));

})

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
app.use('/delete',deletepost);
app.use('/like',like);
//app.use('/blogimage',express.static('blogimage'))

module.exports = app
