const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const main = require('../config/main');
var url = main.url;
mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser:true}).then().catch();
const Schema = mongoose.Schema;
const NotificationMasterSchema = new Schema({
    notificationmaster:{
        type : Schema.Types.ObjectId,
        ref : 'notificationmaster'
    },
date:{
    type:Date,
    default:Date.now
},
notification:{
    type:String,
    default:null
},
template_id:{
    type:String,
    required:true
},
inapp_notification: {
    type:Number,
    default:1
    //- Yes / No
},
sms_notification :{
    type:Number,
    default:1
    //- Yes / No
}
});
module.exports = NotificationMaster = mongoose.model('NotificationMaster',NotificationMasterSchema);