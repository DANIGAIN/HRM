const express = require('express');
const validate = require('../../middlewares/validate.middleware');
const { createDesignationSchema, updateDesignationSchema} = require('../validators/designation.validator');
const createDesignation = require('../controllers/designation/createDesignation.controller');
const updateDesignation = require('../controllers/designation/updateDesignation.controller');
const getDesignation = require('./../controllers/designation/getDesignation.controller');
const getAllDesignations = require('./../controllers/designation/getAllDesignations.controller');
const deleteDesignation = require('./../controllers/designation/deleteDesignation.controller');



const router = express.Router();

router.get('/designations', getAllDesignations);
router.post('/designations', validate(createDesignationSchema), createDesignation);
router.get('/designations/:id', getDesignation);
router.put('/designations/:id',validate(updateDesignationSchema), updateDesignation);
router.delete('/designations/:id', deleteDesignation);
 

module.exports = router;

    