const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const main = require('../config/main');
var url = main.url;
mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser:true}).then().catch();
const Schema = mongoose.Schema;
const TemplateSchema = new Schema({
    template:{
        type : Schema.Types.ObjectId,
        ref : 'template'
    },
template:{
    type:String,
    default:null
},
message:{
    type:String,
    required:true
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
}
    
});
module.exports = Template = mongoose.model('Template',TemplateSchema);