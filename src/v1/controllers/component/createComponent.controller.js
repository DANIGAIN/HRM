const connect = require('../../../config/db.config');
const Component = require('../../models/component.model');
const CustomError = require('./../../../utils/Error');
const createCompoent = async (req, res) => {
    try {
        await connect()
        await Component.create(req.body);
        return res.status(201).json({
            message: "Component is created Successfully",
            success: true
        })

    } catch (error) {
        return res.status(500).json(CustomError.internalServerError(error));
    }

}

module.exports = createCompoent;