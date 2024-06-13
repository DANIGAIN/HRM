const connect = require('../../../config/db.config');
const User = require('../../models/user.model');
const CustomError = require('./../../../utils/Error');
const getUser = async (req, res) => {
    try {
        await connect()
        const {id} = req.params;
        const data = await User.findById(id)
             .select('-__v -password')
             .populate('role', '_id name')
             .populate('designation_id','_id deg_name is_active grade_id')
             .populate('department_id','_id dpt_name parent_dpt_id is_active') 
             .lean();
        data.links = {
            permission: `/mapings/${data.role._id}`
        }

        return res.status(201).json({
            message: "Find user Successfully",
            data,
            success: true
        }) 

    } catch (error) {
        return res.status(500).json(CustomError.internalServerError(error));
    }

}

module.exports = getUser;