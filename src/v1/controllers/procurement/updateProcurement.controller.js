const connect = require('../../../config/db.config');
const Procurement = require('../../models/procurement.model');
const CustomError = require('./../../../utils/Error');
const updateProcurement = async (req, res) => {
    try {
        await connect()
        const {id} = req.params;
        const data = req.body ;
        await Procurement.findByIdAndUpdate({_id:id},{$set:data},{new:true});
        return res.status(201).json({
            message: "Procurement is update Successfully",
            success: true
        })
    } catch (error) {
        return res.status(500).json(CustomError.internalServerError(error));
    }
}
module.exports = updateProcurement;