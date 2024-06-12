const connect = require("../../../config/db.config");
const CustomError = require("../../../utils/Error");
const  Designation = require("../../models/designation.model");

const createDesignation = async (req, res) => {
    try {
        await connect();
        await Designation.create(req.body)
        return res.status(201).json({
             message: "Designation is create successfully",
             success: true
        })
    } catch (error) {
        return res.status(500).json(CustomError.internalServerError(error));
    }
}
module.exports = createDesignation;