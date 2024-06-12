const connect = require('../../../config/db.config');
const RC_Maping = require('../../models/r_c_maping.model');
const CustomError = require('./../../../utils/Error');
const createMaping = async (req, res) => {
    try {
        await connect()
        await RC_Maping.create(req.body);       
        return res.status(201).json({
            message: "Maping is created Successfully",
            success: true
        })

    } catch (error) {
        return res.status(500).json(CustomError.internalServerError(error));
    }

}

module.exports = createMaping;