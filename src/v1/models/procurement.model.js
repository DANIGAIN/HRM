const mongoose = require('mongoose');
const procurementAccessSchema = new mongoose.Schema({
      requester_id:{
        type:mongoose.Types.ObjectId,
        ref:"User"
      },
      approver_id:{
        type:mongoose.Types.ObjectId,
        ref:"User"   
      }

},{
    timestamps:true
})
const Procurement = mongoose.models.Procurement || mongoose.model("Procurement", procurementAccessSchema);
module.exports =  Procurement;