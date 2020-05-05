const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const main = require('../config/main');
var url = main.url;
mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser:true}).then().catch();
const Schema = mongoose.Schema;
const LoginSchema = new Schema({
    login:{
        type : Schema.Types.ObjectId,
        ref : 'login'
    },
username:{
    type:String,
    required:true,
},
password :{
    type:String,
    default:null
},
Otp:{
    type:String,
    default:null
},
otp_date:{
    type:Date,
    default:Date.now
},
user_type:{
    //- Editor, Reporter, Staff, Customer
    type:String,
    required:true,
},
status :{
    type:Number,
    default:0
    //- Activated / Deactivated
},
tbl_name :{
    type:String,
    default:null
    //- customer/user/admin
}
});
module.exports = Login = mongoose.model('Login',LoginSchema);