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

const StateSchema = new Schema({
  state: {
    type: Schema.Types.ObjectId,
    ref: "state",
  },
  state_name: {
    type: String,
    required: true,
  },
status :{
    type: Number,
    default: 0
    //Activated/Deactivated
} ,
created_by:{
    type:String,
    default:null,
    // - save login_id here
},
creation_date :{
    type:Date,
    default:Date
},
// creation_time :{
//     type:T
// },
});
module.exports = State = mongoose.model("State", StateSchema);
