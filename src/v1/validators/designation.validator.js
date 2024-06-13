const { z } = require('zod')
const connect = require('../../config/db.config');
const Designation = require('./../models/designation.model');

const createDesignationSchema = z.object({
    deg_name: z
        .string({ required_error: "Designation name is required" })
        .min(1, { message: "Designation name should be at least 1 letter" })
        .max(255, { message: "Designation name should be at max 255 letter" })
        .refine(
            async (deg_name) => {
                await connect();
                const exist = await Designation.findOne({ deg_name });
                return !exist;
            }, "This designation  already exists "),
    grade_id: z
        .string({ required_error: "Grade is required"}),
    is_active: z
        .boolean({ required_error: "is_active  field is required" })
        .default(true)
})

const updateDesignationSchema = z.object({
    deg_name: z
        .string()
        .min(1, { message: "Designation name should be at least 1 letter" })
        .max(255, { message: "Designation name should be at max 255 letter" })
        .refine(
            async (deg_name) => {
                await connect();
                const exist = await Designation.findOne({ deg_name });
                return !exist;
            }, "This designation  already exists ")
        .optional(),
    grade_id: z
        .string()
        .optional(),
    is_active: z
        .boolean()
        .default(true)
        .optional()
})

module.exports = {
    createDesignationSchema,
    updateDesignationSchema

}