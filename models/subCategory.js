const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const main = require('../config/main');
var url = main.url;
mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser:true}).then().catch();
const Schema = mongoose.Schema;
const SubCategorySchema = new Schema({
    subcategory:{
        type : Schema.Types.ObjectId,
        ref : 'subcategory'
    },
    cat_id:{
        type:String,
        required:true,
    },
    subcat_name:{
        type:String,
        required:true,
    },
    status:{
        type:Number,
        default:0
        // - Activated / Deactivated
    },
    created_by:{ 
        type:String,
        required:true,
        //- save login_id here
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
module.exports = SubCat = mongoose.model('SubCategory',SubCategorySchema);