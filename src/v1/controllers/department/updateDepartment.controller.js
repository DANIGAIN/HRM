const connect = require("../../../config/db.config");
const CustomError = require("../../../utils/Error");
const  Department = require("../../models/department.model");

const updateDepartment = async (req, res) => {
    try {
        await connect();
        const {id} = req.params;
        await Department.findByIdAndUpdate({_id:id} , {$set:req.body});
        return res.status(200).json({
             message: "Update department successfully",
             success: true
        })

    } catch (error) {
        return res.status(500).json(CustomError.internalServerError(error));
    }
}
module.exports = updateDepartment;