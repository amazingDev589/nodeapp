const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const main = require('../config/main');
var url = main.url;
mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser:true}).then().catch();
const Schema = mongoose.Schema;
const FeedbackSchema = new Schema({
    feedback:{
        type : Schema.Types.ObjectId,
        ref : 'feedback'
    },
customer_id:{
    type:String,
    required:true
},
comment:{
    type:String,
    required:true
},
date:{
    type:Date,
    default:Date.now
},
time:{
    type:String,
    default :null
},
entry_type:{ 
    type:String,
    default:null
    //- Web / App
}
});
module.exports = Feedback = mongoose.model('Feedback',FeedbackSchema);