const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const main = require('../config/main');
var url = main.url;
mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser:true}).then().catch();
const Schema = mongoose.Schema;
const PollMasterSchema = new Schema({
    pollmaster:{
        type : Schema.Types.ObjectId,
        ref : 'pollmaster'
    },
    no_of_options :{
        type:String,
        default:null
        //- max input allowed 6
    },
    option_1:{
        type:String,
        default:null
    },
    option_2:{
        type:String,
        default:null
    },
    option_3:{
        type:String,
        default:null
    },
    option_4:{
        type:String,
        default:null
    },
    option_5:{
        type:String,
        default:null
    },
    option_6:{
        type:String,
        default:null
    },
    start_date:{
        type:String,
        default:null
    },
    end_date:{
        type:String,
        default:null
    },
    created_by:{
        type:String,
        required:true
    },
    creation_date:{
        type:Date,
        default:Date.now
    },
    creation_time:{
        type:String,
        default:null
    },
});
module.exports = Pollmaster = mongoose.model('PollMaster',PollMasterSchema);