const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const main = require('../config/main');
var url = main.url;
mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser:true}).then().catch();
const Schema = mongoose.Schema;
const AboutUsSchema = new Schema({
    aboutus:{
        type : Schema.Types.ObjectId,
        ref : 'aboutus'
    },
    about_us:{
        type:String,
        required:true
    }
});
module.exports = Aboutus = mongoose.model('Aboutus',AboutUsSchema);