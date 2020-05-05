const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const main = require('../config/main');
var url = main.url;
mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser:true}).then().catch();
const Schema = mongoose.Schema;
const AdsSchema = new Schema({
    ads:{
        type : Schema.Types.ObjectId,
        ref : 'ads'
    },
title:{
    type:String,
    required:true
},
start_date:{
    type:String,
    required:true,
    
},
end_date:{
    type:String,
    required:true,
},
image:{
    type:String,
    default:null
},
status :{
    type:Number,
    default:0
    //- Pending / Approved / cancelled
},
approved_date:{
    type:Date,
    default:null
},
approved_by:{
    type:String,
    default:null
},
approved_time:{
    type:String,
    default:null
},
cancel_by:{
    type:String,
    required:true
},
cancel_date:{
    type:Date,
    default:Date.now
},
cancel_time:{
    type:String,
    default:null
},
payment_url:{
    type:String,
    default:null
},
payment_ref_id:{
    type:String,
    default:null
},
instamojo_id:{
    type:String,
    default:null
},
paid_amount:{
    type:Number,
    default:null
},
paid_date:{
    type:Date,
    default:null
},
paid_time:{
    type:String,
    default:null
},
entry_type :{
    type:String,
    default:null
    //- Web / App
}
    
});
module.exports = Ads = mongoose.model('Ads',AdsSchema);