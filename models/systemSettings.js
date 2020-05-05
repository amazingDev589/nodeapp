const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const main = require('../config/main');
var url = main.url;
mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser:true}).then().catch();
const Schema = mongoose.Schema;
const SystemSettingSchema = new Schema({
    systemsetting:{
        type : Schema.Types.ObjectId,
        ref : 'systemsetting'
    },
    logo:{
        type:String,
        default:null
    },
    name:{
        type:String,
        default:null
    },
    email:{
        type:String,
        default:null
    },
    email_password:{
        type:String,
        default:null
    },
    contact_no:{
        type:String,
        default:null
    },
    address:{
        type:String,
        default:null
    },
    app_store_link:{
        type:String,
        default:null
    },
    android_app_link:{
        type:String,
        default:null
    },
});
module.exports = Systemsetting = mongoose.model('systemsetting',SystemSettingSchema);