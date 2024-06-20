const express = require('express');
const validate = require('../../middlewares/validate.middleware');
const createDesignation = require('../controllers/designation/createDesignation.controller');
const updateDesignation = require('../controllers/designation/updateDesignation.controller');
const getDesignation = require('./../controllers/designation/getDesignation.controller');
const getAllDesignations = require('./../controllers/designation/getAllDesignations.controller');
const deleteDesignation = require('./../controllers/designation/deleteDesignation.controller');
const {roleAuthorizedMiddleware} = require('./../../middlewares/auth.middleware');
const { createDesignationSchema, updateDesignationSchema} = require('../validators/designation.validator');



const router = express.Router();

router.get('/designations',roleAuthorizedMiddleware, getAllDesignations);
router.post('/designations', validate(createDesignationSchema),roleAuthorizedMiddleware, createDesignation);
router.get('/designations/:id',roleAuthorizedMiddleware, getDesignation);
router.put('/designations/:id',validate(updateDesignationSchema),roleAuthorizedMiddleware, updateDesignation);
router.delete('/designations/:id',roleAuthorizedMiddleware, deleteDesignation);
 

module.exports = router;

    