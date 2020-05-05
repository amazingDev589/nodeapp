const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const main = require('../config/main');
var url = main.url;
mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser:true}).then().catch();
const Schema = mongoose.Schema;
const AlertsSchema = new Schema({
    alerts:{
        type : Schema.Types.ObjectId,
        ref : 'alerts'
    },
   message:{
       type:String,
       required:true,
   },
    date:{
        type:String,
        required:true
    },
    record_id:{
        type:String,
        required:true
    },
    seen :{
        type:Number,
        default:0
        //- Yes / No
    }
});
module.exports = Alerts = mongoose.model('Alerts',AlertSchema);