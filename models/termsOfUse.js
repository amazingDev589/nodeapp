const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const main = require('../config/main');
var url = main.url;
mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser:true}).then().catch();
const Schema = mongoose.Schema;
const TermsOfUseSchema = new Schema({
    termsofuse:{
        type : Schema.Types.ObjectId,
        ref : 'termsofuse'
    },
    terms:{
        type:String,
        required:true
    }
    
});
module.exports = Terms = mongoose.model('Termsofuse',TermsOfUseSchema);