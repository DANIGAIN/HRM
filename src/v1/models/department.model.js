const mongoose = require('mongoose')

const departmentSchema = new mongoose.Schema({
    dpt_name:{
        type:String,
        maxlength:255,
        required: true,
        unique:true
    },
    parent_dep_id:{
        type:String,
    },
    is_active:{
        type:Boolean,
        default:true,
    },    
//     parent_dep_id:{
//         type:mongoose.Types.ObjectId,
//         ref:'Department'
//    },
},{
    timestamps:true 
})

const Department = mongoose.models.Department || mongoose.model('Department', departmentSchema);
module.exports = Department ;