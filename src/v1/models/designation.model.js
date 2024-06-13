const mongoose = require('mongoose');
const designationSchema = new mongoose.Schema({
    deg_name:{
        type:String,
        maxlength:255,
        required: true,
        unique:true
    },
    grade_id:{
        type:String,
    },
    is_active:{
        type:Boolean,
        default:true,
    },

},{
    timestamps:true
})
const Designation = mongoose.models.Designation || mongoose.model("Designation", designationSchema);
module.exports =  Designation;