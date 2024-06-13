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
const {createUserSchema, updateUserSchema} = require('./../validators/auth.validator');


const router = express.Router();

router.post('/users', validate(createUserSchema), createUser);
router.post('/users/login', loginUser);
router.get('/users', getAllUsers);
router.put('/users/:id', updateUser);
router.get('/users/profile',getProfileUser);
router.get('/users/:id', getUser);
router.delete('/users/logout/:id', logoutUser);
   
module.exports = router;
  
