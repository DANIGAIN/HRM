const connect = require('../../../config/db.config');
const Procurement = require('../../models/procurement.model');
const CustomError = require('../../../utils/Error');
const getAllProcurements = async (req, res) => {
    try {
        await connect()
        const data = await Procurement.find()
        .populate('requester_id approver_id' ,'-createdAt -updatedAt -__v -password')
        .sort({ "createdAt": -1 })
        .select('-__v')
        .exec();
        return res.status(200).json({
            message: "Find all Procurements Successfully",
            data,
            success: true
        })

    } catch (error) {
        return res.status(500).json(CustomError.internalServerError(error));
    }

}

module.exports = getAllProcurements;