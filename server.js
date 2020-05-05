//var mysql = require('mysql');
//var cors = require('cors')
var express= require('express')
var cors = require('cors')

var app=express();
app.use(cors())
var login = require('./controllers/login');
var mod = require('./controllers/modules');
app.use('/module',mod);
const port = process.env.PORT || 5000;
app.listen(port,(res,req)=>{
    console.log("server is connected")
})
