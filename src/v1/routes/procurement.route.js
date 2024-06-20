const express = require('express');
const validate = require('../../middlewares/validate.middleware');
const createProcurement = require('../controllers/procurement/createProcurement.controller');
const getAllProcurements = require('../controllers/procurement/getAllProcurements.controller');
const updateProcurement = require('../controllers/procurement/updateProcurement.controller');
const { roleAuthorizedMiddleware } = require('./../../middlewares/auth.middleware');
const { createProcurementSchema, updateProcurementSchema } = require('../validators/procurement.validator')

const router = express.Router();

router.post('/procurements', validate(createProcurementSchema), roleAuthorizedMiddleware, createProcurement);
router.put('/procurements/:id', validate(updateProcurementSchema), roleAuthorizedMiddleware, updateProcurement);
router.get('/procurements', roleAuthorizedMiddleware, getAllProcurements);

module.exports = router;

