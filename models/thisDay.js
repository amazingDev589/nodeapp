const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const main = require('../config/main');
var url = main.url;
mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser:true}).then().catch();
const Schema = mongoose.Schema;
const ThisDaySchema = new Schema({
    thisday:{
        type : Schema.Types.ObjectId,
        ref : 'thisday'
    },
title:{
    type:String,
    required:true
},
tag:{
    type:String,
    required:true
    // - birthday / anniversary /
},
description:{
    type:String,
    required:true
},
images:{
    type:String,
    default:null
},
date:{
    type:String,
   required:true
},
created_by:{
    type:String,
    required:true
},
creation_date:{
    default:Date.now
},
creation_time:{
    type:String
},
});
module.exports = Thisday = mongoose.model('Thisday',ThisDaySchema);