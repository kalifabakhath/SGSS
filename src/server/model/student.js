let mongoose = require('mongoose');
let plm=require("passport-local-mongoose");
let studentschema = new mongoose.Schema({
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

studentschema.plugin(plm);

module.exports = mongoose.model('student',studentschema);


