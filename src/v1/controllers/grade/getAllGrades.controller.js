const connect = require("../../../config/db.config");
const CustomError = require("../../../utils/Error");
const Grade = require("../../models/grade.model");

const getAllGrades = async (req, res) => {
    try {
        await connect();
        const data = await Grade.find().sort({ "createdAt": -1 }).select('-__v -createdAt -updatedAt');
        return res.status(200).json({
             message: "Get All grades successfully",
             data,
             success: true
        })

    } catch (error) {
        return res.status(500).json(CustomError.internalServerError(error));
    }
}
module.exports = getAllGrades;