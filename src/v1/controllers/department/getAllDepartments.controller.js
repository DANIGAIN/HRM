const connect = require("../../../config/db.config");
const CustomError = require("../../../utils/Error");
const  Department = require("../../models/department.model");

const getAllDepartments = async (req, res) => {
    try {
        await connect();
        const data = await Department.find().sort({ "createdAt": -1 }).select('-__v -createdAt -updatedAt');
        return res.status(201).json({
             message: "Get All departments successfully",
             data, 
             success: true
        })

    } catch (error) {
        return res.status(500).json(CustomError.internalServerError(error));
    }
}
module.exports = getAllDepartments;