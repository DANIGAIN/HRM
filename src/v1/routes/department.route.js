const express = require('express');
const validate = require('../../middlewares/validate.middleware');
const { createDepartmentSchema, updateDepartmentSchema } = require('../validators/department.validator');
const createDepartment = require('../controllers/department/createDepartment.controller');
const updateDepartment = require('./../controllers/department/updateDepartment.controller');
const getDepartment = require('./../controllers/department/getDepartment.controller');
const getAllDepartments = require('./../controllers/department/getAllDepartments.controller');
const deleteDepartment = require('./../controllers/department/deleteDepartment.controller');



const router = express.Router();

router.get('/departments', getAllDepartments);
router.post('/departments', validate(createDepartmentSchema), createDepartment);
router.get('/departments/:id', getDepartment);
router.put('/departments/:id',validate(updateDepartmentSchema), updateDepartment);
router.delete('/departments/:id', deleteDepartment);
 

module.exports = router;

    