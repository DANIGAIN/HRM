const jwt = require('jsonwebtoken');
const User = require('./../../models/user.model');
const connect = require('../../../config/db.config');
const CustomError = require('./../../../utils/Error');
const { hashPassword } = require('../../services/auth.service');
const updateUser = async (req, res) => {
    try {
        await connect()
        const { id } = req.params;
        const {password} = req.body;
        if (password) req.body.password = await hashPassword(password);
        await User.findByIdAndUpdate({ _id: id }, { $set: req.body}, { new: true });
        const updateUser = await User.findById(id).populate('role', '_id name');
        jwt.sign({ email: updateUser.email, role: updateUser.role.name, username: updateUser.username }, process.env.JWT_SECRET, {}, (error, token) => {
            if (error) throw error;
            res.cookie('token', token, {
                expires: new Date(Date.now() + 2589200000),
                httpOnly: true,
            }).status(200).json({
                message: "User is updated successfully",
                success: true,
            });;
        });

    } catch (error) {
        return res.status(500).json(CustomError.internalServerError(error));
    }

}

module.exports = updateUser;