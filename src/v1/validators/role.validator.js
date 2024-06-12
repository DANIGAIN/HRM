const { z } = require('zod')
const connect = require('../../config/db.config');
const Role = require('../models/role.model');

const createRoleSchema = z.object({
    name: z
        .string({ required_error: "Role name is required" })
        .min(1, { message: "Role name should be at least 1 letter" })
        .max(55, { message: "Role name should be at max 55 letter" })
        .refine(
            async (name) => {
                await connect();
                const exist = await Role.findOne({ name });
                return !exist;
            }, "This name is already exists"
        ),
    isActive: z
        .boolean()
        .default(true)
});

const updateRoleSchema = z.object({
    name: z
        .string()
        .min(1, { message: "Role name should be at least 1 letter" })
        .max(55, { message: "Role name should be at max 55 letter" })
        .optional()
        .refine(
            async (name) => {
                await connect();
                const exist = await Role.findOne({ name });
                return !exist;
            }, "This name is already exists"
        ),
    isActive: z
        .boolean()
        .default(true)
        .optional()
})



module.exports = {
    createRoleSchema,
    updateRoleSchema
}