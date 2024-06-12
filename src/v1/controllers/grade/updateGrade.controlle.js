const connect = require("../../../config/db.config");
const CustomError = require("../../../utils/Error");
const Grade = require("../../models/grade.model");

const updateGrade = async (req, res) => {
    try {
        await connect();
        const {id} = req.params;
        await Grade.findByIdAndUpdate({_id:id} , {$set:req.body});
        return res.status(200).json({
             message: "Update grade successfully",
             success: true
        })

    } catch (error) {
        return res.status(500).json(CustomError.internalServerError(error));
    }
}
module.exports = updateGrade;