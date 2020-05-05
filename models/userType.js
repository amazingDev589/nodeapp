const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const main = require('../config/main');
var url = main.url;
mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser:true}).then().catch();

const Schema = mongoose.Schema;

const UsertypeSchema = new Schema({
    usertype:{
        type : Schema.Types.ObjectId,
        ref : 'usertype'
    },
    type : {
        type: String,
        required :true
    },
    status:{
        type:Number,
        default:0,
    }
  
});
module.exports = Usertype = mongoose.model('Usertype',UsertypeSchema);