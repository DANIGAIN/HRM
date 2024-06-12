const express = require('express');
const validate = require('../../middlewares/validate.middleware');
const createMaping = require('../controllers/mapping/createMaping');
const getAllMapings = require('../controllers/mapping/getAllMapings');
const updateMaping = require('../controllers/mapping/updateMaping');
const getMapingByUserRole = require('./../controllers/mapping/getMapingByUserRole')
const {roleAuthorizedMiddleware } = require('./../../middlewares/auth.middleware');
const { createMapingSchema, updateMapingSchema } = require('../validators/maping.validator');


const router = express.Router();

router.get('/mapings', roleAuthorizedMiddleware, getAllMapings);
router.post('/mapings', validate(createMapingSchema), roleAuthorizedMiddleware, createMaping);
router.put('/mapings/:id', validate(updateMapingSchema), roleAuthorizedMiddleware, updateMaping);
router.get('/mapings/:roleId', roleAuthorizedMiddleware , getMapingByUserRole);

module.exports = router;

