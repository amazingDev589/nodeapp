const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const main = require('../config/main');
var url = main.url;
mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser:true}).then().catch();
const Schema = mongoose.Schema;
const AppratingSchema = new Schema({
    apprating:{
        type : Schema.Types.ObjectId,
        ref : 'apprating'
    },
customer_id:{
    type:String,
    required:true
},
rating:{
    type:String,
    default:null
},
date:{
    type:Date,
    default:Date.now
},
time:{
    type:String,
    default:null
}

});
module.exports = Apprating = mongoose.model('Apprating',AppratingSchema);