const connect = require("../../../config/db.config");
const CustomError = require("../../../utils/Error");
const Grade = require("../../models/grade.model");

const getGrade = async (req, res) => {
    try {
        await connect();
        const {id} = req.params;
        const grade = await Grade.findById(id);
        if(!grade){
            return res.status(400).json(CustomError.badRequestError({message:"This grade does not exist"}))

        }
        const data = await Grade.findOne({_id:id}).select('-__v');
        return res.status(200).json({
             message: "Get grade successfully",
             data,
             success: true
        })

    } catch (error) {
        return res.status(500).json(CustomError.internalServerError(error));
    }
}
module.exports = getGrade;