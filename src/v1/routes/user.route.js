const express = require('express');
const validate = require('./../../middlewares/validate.middleware');
const loginUser = require('../controllers/users/loginUser.controller');
const createUser = require('./../controllers/users/createUser.controller');
const getAllUsers = require('./../controllers/users/getAllUsers.controller');
const updateUser = require('./../controllers/users/updateUser.controller');
const getProfileUser = require('./../controllers/users/getProfileUser.controller');
const getUser = require('./../controllers/users/getUser.controller');
const logoutUser = require('./../controllers/users/logoutUser.controller');
const { roleAuthorizedMiddleware } = require('./../../middlewares/auth.middleware');
const { createUserSchema, updateUserSchema } = require('./../validators/auth.validator');


const router = express.Router();

router.post('/users', validate(createUserSchema), roleAuthorizedMiddleware, createUser);
router.post('/users/login', loginUser);
router.get('/users', roleAuthorizedMiddleware, getAllUsers);
router.put('/users/:id', validate(updateUserSchema), roleAuthorizedMiddleware, updateUser);
router.get('/users/profile', getProfileUser);
router.get('/users/:id', roleAuthorizedMiddleware, getUser);
router.delete('/users/logout/:id', roleAuthorizedMiddleware, logoutUser);

module.exports = router;

