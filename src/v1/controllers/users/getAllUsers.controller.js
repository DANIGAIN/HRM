const connect = require('../../../config/db.config');
const User = require('../../models/user.model');
const CustomError = require('./../../../utils/Error');
const getAllUsers = async (req, res) => {
    try {
        await connect()
        const data = await User.find()
             .sort({ "createdAt": -1 })
             .select('-__v -password -createdAt -updatedAt')
             .populate('role', '_id name')
             .populate('designation_id','_id deg_name is_active grade_id')
             .populate('department_id','_id dpt_name parent_dpt_id is_active') 

        return res.status(201).json({
            message: "Find all user Successfully",
            data,
            success: true
        }) 

    } catch (error) {
        return res.status(500).json(CustomError.internalServerError(error));
    }

}

module.exports = getAllUsers;