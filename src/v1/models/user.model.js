const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    full_name:{
        type: String,
        maxlength: 255
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"]
    },
    password:{
        type: String,
        minlength: 4,
        maxlength: 255
    },
    role:{   
        type: mongoose.Types.ObjectId,
        ref:'Role'
    },
    is_verified:{
        type:Boolean,
        default:false
    },
    is_active:{
        type:Boolean,
        default:true,
    },
    token:{
        type:String,
    },
    address:{
        type:String,
        maxlength: 255

    },
    designation_id:{
        type:mongoose.Types.ObjectId,
        ref:"Designation"
    },
    department_id:{
        type:mongoose.Types.ObjectId,
        ref:"Department"
    }

},{
    timestamps:true
})
const User = mongoose.models.User || mongoose.model("User", userSchema);
module.exports =  User;