const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const main = require('../config/main');
var url = main.url;
mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser:true}).then().catch();
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    users:{
        type : Schema.Types.ObjectId,
        ref : 'users'
    },
name:{
    type:String,
    required:true,
},
state :{
    type:String,
    default:null
},
city:{
    type:String,
    default:null
},
mobile_no:{
    type:String,
    default:null
},
email:{
    type:String,
    default:null
    // required:true,
},
login_id :{
    type:String,
    required:true, 
},
created_by :{
    type:String,
    default:null
},
creation_date:{
    type:Date,
    default:Date.now
},
});
module.exports = User = mongoose.model('User',UserSchema);