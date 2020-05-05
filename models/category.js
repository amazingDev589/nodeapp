const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const main = require('../config/main');
var url = main.url;
mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser:true}).then().catch();
const Schema = mongoose.Schema;
const CategorySchema = new Schema({
    category:{
        type : Schema.Types.ObjectId,
        ref : 'category'
    },
    cat_name:{
        type:String
    },
    status :{
        type:Number,
        default:0
        //- Activated / deactivated
    },
    created_by :{
        type:String
        //- save login_id here
    },
    creation_time :{
        type:String
    },
    creation_date:{
        type:Date,
        default:Date.now
    },
    display:{
        type:Number,
        default:0
        //-as-separate-menu - yes / no (for marathi lekh / changemakers etc)
    }
});
module.exports = Category = mongoose.model('Category',CategorySchema);