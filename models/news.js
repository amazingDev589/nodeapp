const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const main = require('../config/main');
var url = main.url;
mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser:true}).then().catch();
const Schema = mongoose.Schema;
const NewsSchema = new Schema({
    news:{
        type : Schema.Types.ObjectId,
        ref : 'news'
    },
title:{
    type:String,
    default:null
},
description :{
    type:String,
default:null
},
images :{
    type:String,
    default:null
    //- save multiple in same field
},
content:{
    type:String,
    default:null
},
state:{
    type:String,
    default:null
},
city:{
    type:String,
    default:null
},
category_id:{
    type:String,
    default:null
},
subcategory_id:{
    type:String,
    default:null
},
created_by:{
    type:String,
    default:null
},
creation_date:{
    type:String,
    default:null
},
creation_time:{
    type:String,
    default:null
},
video_link:{
    type:String,
    default:null
//- save multiple in same field
} ,
document_link:{
    type:String,
    default:null
//- save multiple in same field
}, 
reporter_id:{
    type:String,
    default:null
},
editor_id:{
    type:String,
    default:null
},
display_startdate:{
    type:Date,
    default:null
},
display_enddate:{
    type:Date,
    default:null
},
approval_Status:{
    type:Number,
    default:null
  //  - Pending/ Approved
},
approved_by:{
    type:String,
    default:null
},
approved_date:{
    type:String,
    default:null
},
approved_time:{
    type:String,
    default:null
},
status:{
    type:String,
    default:null
//- Active/ Inactive
} ,
entry_type :{
    type:String,
    default:null
    //- Web / App
}
});
module.exports = News = mongoose.model('News',NewsSchema);