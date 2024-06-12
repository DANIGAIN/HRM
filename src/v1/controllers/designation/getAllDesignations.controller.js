const connect = require("../../../config/db.config");
const CustomError = require("../../../utils/Error");
const  Designation = require("../../models/designation.model");

const getAllDesignations = async (req, res) => {
    try {
        await connect();
        const data = await Designation.find()
           .sort({ "createdAt": -1 })
           .select('-__v -createdAt -updatedAt')
           .populate('grade' ,'_id grade_name grade_letter');
        return res.status(201).json({
             message: "Get All designation successfully",
             data, 
             success: true
        })

    } catch (error) {
        return res.status(500).json(CustomError.internalServerError(error));
    }
}
module.exports = getAllDesignations;