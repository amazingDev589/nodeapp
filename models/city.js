const mongoose = require("mongoose");
const main = require('../config/main');
var url = main.url;
mongoose.Promise = global.Promise;
mongoose
  .connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then()
  .catch();
const Schema = mongoose.Schema;

const CitySchema = new Schema({
  city: {
    type: Schema.Types.ObjectId,
    ref: "city",
  },
  state_id:{
      type:String,
      required:true,
  },
  city_name:{
      type:String,
      required:true,
  },
  status:{
      type :Number,
      default:0
    //Activated/ Deactivated
  },
  created_by :{
      type:String,
      default:null
    //save login_id here
  },
  creation_date:{
    type:Date
  }
});
module.exports = City = mongoose.model("City", CitySchema);
