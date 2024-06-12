const express = require('express');
const validate = require('../../middlewares/validate.middleware');
const { createGradeSchema, updateGradeSchema } = require('../validators/grade.valdator');
const createGrade = require('../controllers/grade/createGrade.controller');
const getAllGrades = require('./../controllers/grade/getAllGrades.controller');
const getGrade = require('../controllers/grade/getGrade.controller');
const deleteGrade = require('../controllers/grade/deleteGrade.controller');
const updateGrade = require('../controllers/grade/updateGrade.controlle');

const router = express.Router();

router.get('/grades', getAllGrades);
router.post('/grades', validate(createGradeSchema), createGrade);
router.get('/grades/:id', getGrade);
router.put('/grades/:id',validate(updateGradeSchema), updateGrade);
router.delete('/grades/:id', deleteGrade);
 

module.exports = router;

    