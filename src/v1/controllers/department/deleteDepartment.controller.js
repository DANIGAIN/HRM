const connect = require("../../../config/db.config");
const CustomError = require("../../../utils/Error");
const  Department = require("../../models/department.model");

const deleteDepartment = async (req, res) => {
    try {
        await connect();
        const {id} = req.params;
        const department = await Department.findById(id);
        if(!department){
            return res.status(400).json(CustomError.badRequestError({message:"This department does not exist"}))

        }
       await Department.findByIdAndDelete({_id: id});
        return res.status(201).json({
             message: "Department delete successfully",
             success: true
        })

    } catch (error) {
        return res.status(500).json(CustomError.internalServerError(error));
    }
}
module.exports = deleteDepartment;