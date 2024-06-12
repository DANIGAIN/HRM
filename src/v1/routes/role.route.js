const express = require('express');
const validate = require('./../../middlewares/validate.middleware');
const createRole = require('./../controllers/roles/createRole.controller');
const getAllRoles = require('./../controllers/roles/getAllRoles.controller');
const updateRole = require('./../controllers/roles/updateRole.controller');
const {roleAuthorizedMiddleware} = require('./../../middlewares/auth.middleware');
const { createRoleSchema, updateRoleSchema } = require('../validators/role.validator');


const router = express.Router();

router.get('/roles',roleAuthorizedMiddleware, getAllRoles);
router.post('/roles', validate(createRoleSchema), roleAuthorizedMiddleware, createRole);
router.put('/roles/:id', validate(updateRoleSchema), roleAuthorizedMiddleware, updateRole);

module.exports = router;