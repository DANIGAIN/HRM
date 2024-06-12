const connect = require("../../../config/db.config");
const CustomError = require("../../../utils/Error");
const  Department = require("../../models/department.model");

const createDepartment = async (req, res) => {
    try {
        await connect();
        await Department.create(req.body)
        return res.status(201).json({
             message: "Department is create successfully",
             success: true
        })

    } catch (error) {
        return res.status(500).json(CustomError.internalServerError(error));
    }
}
module.exports = createDepartment;