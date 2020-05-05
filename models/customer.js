const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const main = require('../config/main');
var url = main.url;
mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser:true}).then().catch();
const Schema = mongoose.Schema;
const AboutUsSchema = new Schema({
    aboutus:{
        type : Schema.Types.ObjectId,
        ref : 'aboutus'
    },
name:{
    type :String,


},
mobile_no:{
    type :String,
    default:null,
},
email:{
    type :String,
    default:null,
},
state:{
    type :String,
    default:null,
},
city:{
    type :String,
    default:null,
},
dob:{
    type :String,
    default:null,
},
latitude:{
    type :String,
    default:null,
},
longitude:{
    type :String,
    default:null,
},
login_id:{
    type :String,
    default:null,
},
created_by:{
    type :String,
    default:null,
    // - save login_id here
},
creation_date :{
    type :Date,
    default:Date.now,
},
creation_time :{
    type :String,
},
send_sms :{
    type:Number,
    default:1,
    // Yes/No
},
entry_type :{
    type:String,
    default:null,
    // - Web / App
}
});
module.exports = Aboutus = mongoose.model('Aboutus',AboutUsSchema);