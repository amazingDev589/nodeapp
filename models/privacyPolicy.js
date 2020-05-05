const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const main = require('../config/main');
var url = main.url;
mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser:true}).then().catch();
const Schema = mongoose.Schema;
const PrivacySchema = new Schema({
    privacypolicy:{
        type : Schema.Types.ObjectId,
        ref : 'privacypolicy'
    },
    policy:{
        type:String,
        required:true
    }
});
module.exports = Privacy = mongoose.model('privacypolicy',PrivacySchema);