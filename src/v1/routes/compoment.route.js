const express = require('express');
const validate = require('./../../middlewares/validate.middleware');
const createComponent = require('./../controllers/component/createComponent.controller');
const getAllComponent = require('./../controllers/component/getAllComponent.controller');
const updateComponent = require('./../controllers/component/updateComponent.controller');
const {roleAuthorizedMiddleware} = require('./../../middlewares/auth.middleware');
const { createComponentSchema, updateComponentSchema } = require('../validators/component.validator');

const router = express.Router();

router.get('/components', roleAuthorizedMiddleware, getAllComponent);
router.post('/components', validate(createComponentSchema), roleAuthorizedMiddleware, createComponent);
router.put('/components/:id', validate(updateComponentSchema), roleAuthorizedMiddleware, updateComponent);

module.exports = router;