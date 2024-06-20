const connect = require('../../../config/db.config');
const Procurement = require('../../models/procurement.model');
const CustomError = require('./../../../utils/Error');
const createProcurement = async (req, res) => {
    try {
        await connect()
        await Procurement.create(req.body);       
        return res.status(201).json({
            message: "Procurement is created Successfully",
            success: true
        })

    } catch (error) {
        return res.status(500).json(CustomError.internalServerError(error));
    }

}

module.exports = createProcurement;