const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const main = require('../config/main');
var url = main.url;
mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser:true}).then().catch();
const Schema = mongoose.Schema;
const  CustomerCategorySchema = new Schema({
    customerCategory:{
        type : Schema.Types.ObjectId,
        ref : 'customerCategory'
    },
    customer_id:{
        type:String,
    },
    category_id :{
        type:String,
    },
    display :{
        type:String,
        //Yes / No
    },
    creation_date:{
        type:Date,
        default:Date.now
    },
    creation_time:{
        type:String,
    },
    created_by :{
        type:String,
        // save login_id here
    },
    entry_type :{
        type:String,
        //- Web / App
    }
});
module.exports = CustomerCat = mongoose.model('Customercategory',CustomerCategorySchema);