const { getUser } = require('../v1/services/auth.service');
const getPermisson = require('../v1/services/permisson.service');
const CustomError = require('./../utils/Error');
const userAuthorizedMiddleware = async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        return res.status(401).json(CustomError.unauthorizeError({ message: "unauthorize !User can not login" }))
    }
    next();
}

const roleAuthorizedMiddleware = async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        return res.status(401).json(CustomError.unauthorizeError({ message: "unauthorize !User can not login" }))
    }
    const user = await getUser(token);
    const permisson = await getPermisson(user.role, req.path.split('/')[1])
    if (!permisson) {
        return res.status(403).json(CustomError.unauthorizeError({ message: "Forbedden! your role can not allow access !." }))
    }
    next();
}

module.exports = {
    userAuthorizedMiddleware,
    roleAuthorizedMiddleware
};