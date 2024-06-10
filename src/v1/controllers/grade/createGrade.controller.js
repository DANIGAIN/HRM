const CustomError = require("../../../utils/Error");
const Grade = require("../../models/grade.model");
const User = require("../../models/user.model");

const createGrade = async (req, res) => {
    try {
        const { grade_name } = req.body;
        const data = await Grade.create({ grade_name })
        return res.json(CustomSuccess.create({ message: "Grade name is create successfully", data }))

    } catch (error) {
        return res.json(CustomError.internalServerError(error));
    }




}
module.exports = createGrade;