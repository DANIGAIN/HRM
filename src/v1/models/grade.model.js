const mongoose = require('mongoose');
const gradeSchema = new mongoose.Schema({
    grade_name:{
        type:String,
        maxlength:255,
        required: true,
        unique:true
    },
    grade_letter:{
        type:String,
        maxlength:3,
        required: false,
    },
},{
    timestamps:true
})
const Grade = mongoose.models.Grade || mongoose.model("Grade", gradeSchema);
module.exports =  Grade;