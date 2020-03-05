let mongoose = require('mongoose');
let plm=require("passport-local-mongoose");
let adminschema = new mongoose.Schema({
    username:{
       type:String,
       required:true,
       unique: true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:" "
    }
});

adminschema.plugin(plm);

module.exports = mongoose.model('admin',adminschema);
