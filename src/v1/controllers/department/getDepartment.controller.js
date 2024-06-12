const connect = require("../../../config/db.config");
const CustomError = require("../../../utils/Error");
const  Department = require("../../models/department.model");

const getDepartment = async (req, res) => {
    try {
        await connect();
        const {id} = req.params;
        const data = await Department.findOne({_id: id}).select('-__v');
        if(!data){
            return res.status(400).json(CustomError.badRequestError({message:"This department does not exist"}))
        }
        return res.status(201).json({
             message: "Get department successfully",
             data,
             success: true
        })

    } catch (error) {
        return res.status(500).json(CustomError.internalServerError(error));
    }
}
module.exports = getDepartment;