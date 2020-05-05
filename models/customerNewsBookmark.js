const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const main = require('../config/main');
var url = main.url;
mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser:true}).then().catch();
const Schema = mongoose.Schema;
const CustomerNewsBookmarkSchema = new Schema({
    customernewsbookmark:{
        type : Schema.Types.ObjectId,
        ref : 'customernewsbookmark'
    },
customer_id:{
    type:String,
    required:true
},
news_id:{
    type:String,
    required:true
},
bookmarked :{
    type:Number,
    default:0
    //- Yes / No
},
date:{
    type:Date,
    default:Date.now
},
time:{
    type:String,
    default:null
},
entry_type :{
    type:String,
    default:null
    //- Web / App
}
    
});
module.exports = CustomerNewsBookmark = mongoose.model('customernewsbookmark',CustomerNewsBookmarkSchema);