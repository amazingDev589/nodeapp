const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const main = require('../config/main');
var url = main.url;
mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser:true}).then().catch();
const Schema = mongoose.Schema;
const UserAccessControlSchema = new Schema({
    useraccesscontrol:{
        type : Schema.Types.ObjectId,
        ref : 'useraccesscontrol'
    },
user_id:{
    type:String,
    required:true
},
module_id:{
    type:String,
    required:true
},
create_flag:{
    type:Number,
    default:0
},
update_flag:{
    type:Number,
    default:0
},
view_flag:{
    type:Number,
    default:0
},
delete_flag:{
    type:Number,
    default:0
},
excel_flag:{
    type:Number,
    default:0
},
pdf_flag:{
    type:Number,
    default:0
},
created_by:{
    type:String,
   required:true
},
creation_date:{
    type:date,
    default:Date.now
},
creation_time:{
    type:String,
    default:null
},
});
module.exports = UserAccessControl = mongoose.model('useraccesscontrol',UserAccessControlSchema);