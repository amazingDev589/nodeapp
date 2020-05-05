const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const main = require('../config/main');
var url = main.url;
mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser:true}).then().catch();
const Schema = mongoose.Schema;
const EventSchema = new Schema({
    event:{
        type : Schema.Types.ObjectId,
        ref : 'event'
    },
title:{},
description:{},
start_date:{},
end_date:{},
images :{//- save multiple in same field
},
status :{
    // Upcoming / Past
},
created_by:{},
creation_date:{},
creation_time:{},
entry_type :{
    //- Web / App
}

});
module.exports = Event = mongoose.model('Event',EventSchema);