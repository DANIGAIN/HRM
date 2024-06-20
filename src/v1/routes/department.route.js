const express = require('express');
const validate = require('../../middlewares/validate.middleware');
const createDepartment = require('../controllers/department/createDepartment.controller');
const updateDepartment = require('./../controllers/department/updateDepartment.controller');
const getDepartment = require('./../controllers/department/getDepartment.controller');
const getAllDepartments = require('./../controllers/department/getAllDepartments.controller');
const deleteDepartment = require('./../controllers/department/deleteDepartment.controller');
const {roleAuthorizedMiddleware} = require('./../../middlewares/auth.middleware');
const { createDepartmentSchema, updateDepartmentSchema } = require('../validators/department.validator');


const router = express.Router();

router.get('/departments',roleAuthorizedMiddleware, getAllDepartments);
router.post('/departments', validate(createDepartmentSchema),roleAuthorizedMiddleware, createDepartment);
router.get('/departments/:id',roleAuthorizedMiddleware, getDepartment);
router.put('/departments/:id',validate(updateDepartmentSchema),roleAuthorizedMiddleware, updateDepartment);
router.delete('/departments/:id',roleAuthorizedMiddleware, deleteDepartment);
 

module.exports = router;

    