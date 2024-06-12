const { z } = require('zod')
const connect = require('../../config/db.config');
const Department = require('./../models/department.model');

const createDepartmentSchema = z.object({
    dpt_name: z
        .string({ required_error: "Department name is required" })
        .min(1, { message: "Department name should be at least 1 letter" })
        .max(255, { message: "Department name should be at max 255 letter" })
        .refine(
            async (dpt_name) => {
                await connect();
                const exist = await Department.findOne({ dpt_name });
                return !exist;
            }, "This Department already exists "),
    parent_dpt_id: z
        .string({ required_error: "parent department  is required" })
        .max(255, { message: "parent department  should be at max 3 letter" }),
    is_active: z
        .boolean({ required_error: "is_active  field is required" })
        .default(true)
})
const updateDepartmentSchema = z.object({
    dpt_name: z
        .string({ required_error: "Department name is required" })
        .min(1, { message: "Department name should be at least 1 letter" })
        .max(255, { message: "Department name should be at max 255 letter" })
        .optional()
        .refine(
            async (dpt_name) => {
                await connect();
                const exist = await Department.findOne({ dpt_name });
                return !exist;
            }, "This Department already exists "),
    parent_dpt_id: z
        .string({ required_error: "parent department  is required" })
        .max(255, { message: "parent department  should be at max 3 letter" })
        .optional(),
    is_active: z
        .boolean({ required_error: "is_active  field is required" })
        .default(true)
        .optional()
})



module.exports = {
    createDepartmentSchema,
    updateDepartmentSchema
}