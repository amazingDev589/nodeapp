const express = require("express");
//const session = require('express-session');
var router = express.Router();
//const MongoClient = require('mongodb');
//const assert = require('assert');
//import user model
const Login = require("../models/login");
router.get("/get", async(req, res) => {
 const user = await Login.findOne({username:req.query.name});
 if(user.legnth === 0){
    const newuser = new Login({
        
    })
 }
});
module.exports = router;
