const connect = require('../../../config/db.config');
const Role = require('../../models/role.model');
const jwt = require('jsonwebtoken');
const User = require('../../models/user.model');
const { comparePassword } = require('../../services/auth.service');
const CustomError = require('./../../../utils/Error');
const loginUser = async (req, res) => {
    try {
        await connect()
        const { email, password } = req.body;
        const user = await User.findOne({email});
        if (!user) {
            return res.status(400).json(CustomError.badRequestError({ message: "User can not exist"}))
        }

        const matched = await comparePassword(password, user.password);
        if (!matched) {
            return res.status(400).json(CustomError.badRequestError({ message: "Incurrent Password" }))
        }
        jwt.sign({ _id: user._id, email: user.email, role: user.role._id }, process.env.JWT_SECRET, {}, (error, token) => {
            if (error) throw error;
            res.cookie('token', token, {
                expires: new Date(Date.now() + 2589200000),
                httpOnly: true,
            }).status(200).json({
                message: "Login successfully",
                success: true,
            });;
        });


    } catch (error) {
        return res.status(500).json(CustomError.internalServerError(error))
    }

}

module.exports = loginUser;