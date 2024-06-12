const connect = require("../../../config/db.config");
const CustomError = require("../../../utils/Error");
const Grade = require("../../models/grade.model");

const deleteGrade = async (req, res) => {
    try {
        await connect();
        const {id} = req.params;
        const grade = await Grade.findById(id);
        if(!grade){
            return res.status(400).json(CustomError.badRequestError({message:"This grade does not exist"}));
        }
        await Grade.findByIdAndDelete({_id:id});
        return res.status(200).json({
             message: "Delete grade successfully",
             success: true
        })

    } catch (error) {
        return res.status(500).json(CustomError.internalServerError(error));
    }
}
module.exports = deleteGrade;