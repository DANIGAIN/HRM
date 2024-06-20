const { z } = require('zod');
const connect = require('./../../config/db.config');
const RC_Maping = require('../models/r_c_maping.model');
const Role = require('./../models/role.model');
const Component = require('./../models/component.model');

const createMapingSchema = z.object({
  role: z
    .string({ required_error: "Role is required" })
    .refine(
      async (role) => {
        await connect()
        const exist = await Role.findOne({ role });
        return !exist;
      }, "This role can not exist"
    ),
  component: z
    .string({ required_error: "Component is required" })
    .refine(
      async (component) => {
        await connect();
        const exist = await Component.findOne({ component });
        return !exist;
      }, "This component can not exist")
})

const updateMapingSchema = z.object({
  role: z
    .string()
    .refine(
      async (role) => {
        await connect()
        const exist = await Role.findOne({ role });
        return !exist;
      }, "This role can not exist"
    )
    .optional(),
  component: z
    .string()
    .refine(
      async (component) => {
        await connect();
        const exist = await Component.findOne({ component });
        return !exist;
      }, "This component can not exist")
    .optional()
})
module.exports = {
  createMapingSchema,
  updateMapingSchema
}