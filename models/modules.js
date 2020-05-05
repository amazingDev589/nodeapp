const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const main = require('../config/main');
var url = main.url;
mongoose.connect(url,{ useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,}).then().catch();
const Schema = mongoose.Schema;
const ModulesSchema = new Schema({
    modules:{
        type : Schema.Types.ObjectId,
        ref : 'modules'
    },
master_name:{
    type:String,
    required:true
},
child_name:{
    type:String,
   // required:true
},
display_order:{
    type:Number,
    required:true,
},
icon:{
    type:String,
    default:null
},
url:{
    type:String,
    default:null
}
});
module.exports = Modules = mongoose.model('Modules',ModulesSchema);