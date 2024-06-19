const connect = require('../../../config/db.config');
const {hashPassword} = require('./../../services/auth.service');
const CustomError = require('./../../../utils/Error');
const User = require('../../models/user.model');
const createUser = async(req, res) => {
    try {
    await connect()   
    const { password } = req.body;
    const hash = await hashPassword(password)
    req.body.password = hash;
    await User.create(req.body);

    return res.status(201).json({
         message:"User created successfully",
         links:{
            login:"/users/login"
         },
         success:true,
    })
    } catch (error) {
        return res.status(500).json(CustomError.internalServerError(error))
    }

}

module.exports = createUser;