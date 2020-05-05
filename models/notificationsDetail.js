const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const main = require('../config/main');
var url = main.url;
mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser:true}).then().catch();
const Schema = mongoose.Schema;
const NotificationDetailsSchema = new Schema({
notificationdetails:{
    type : Schema.Types.ObjectId,
    ref : 'notificationdetails'
},
notification_id:{
    type:String,
    required:true
},
customer_id:{
    type:String,
    required:true
},
type :{
    type:String,
    required:true
    //- editor, reporter, customer
    }
});
module.exports = NotificationDetails = mongoose.model('NotificationDetails',NotificationDetailsSchema);