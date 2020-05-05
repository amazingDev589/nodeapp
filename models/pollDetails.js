const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const main = require('../config/main');
var url = main.url;
mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser:true}).then().catch();
const Schema = mongoose.Schema;
const PollDetailsSchema = new Schema({
    polldetails:{
        type : Schema.Types.ObjectId,
        ref : 'polldetails'
    },
    customer_id:{
        type:String,
        required:true
    },
    poll_id:{
        type:String,
        required:true
    },
    answer_1:{
        type:String,
        default:null
    },
    answer_2:{
        type:String,
        default:null
    },
    answer_3:{
        type:String,
        default:null
    },
    answer_4:{
        type:String,
        default:null
    },
    answer_5:{
        type:String,
        default:null
    },
    answer_6:{
        type:String,
        default:null
    },
    date:{
        type:Date,
        default:Date.now
    },
    time:{
        type:String,
        default:null
    }
});
module.exports = PollDetails = mongoose.model('PollDetails',PollDetailsSchema);