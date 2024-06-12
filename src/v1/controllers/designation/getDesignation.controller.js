const connect = require("../../../config/db.config");
const CustomError = require("../../../utils/Error");
const  Designation = require("../../models/designation.model");

const getDesignation = async (req, res) => {
    try {
        await connect();
        const {id} = req.params;
        const data = await Designation.findOne({_id: id}).select('-__v');
        if(!data){
            return res.status(400).json(CustomError.badRequestError({message:"This designation does not exist"}))
        }
        return res.status(201).json({
             message: "Designation is create successfully",
             data,
             success: true
        })
    } catch (error) {
        return res.status(500).json(CustomError.internalServerError(error));
    }
}
module.exports = getDesignation;