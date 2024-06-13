const { z } = require('zod');
const connect = require('../../config/db.config');
const Role = require('../models/role.model');
const Designation = require('./../models/designation.model')
const Department = require('./../models/department.model');

const createUserSchema = z.object({
    full_name: z
        .string()
        .max(255, { message: "Full name should be at last 255 character" })
        .optional(),
    email: z
        .string({ required_error: "Email is required" })
        .min(1, { message: "Email should be at min 1 character" })
        .email({ message: "This is a email field" }),
    password: z
        .string()
        .min(4, { message: "Password should be at min 4 character" })
        .max(255, { message: "Password should be at max 255 character" }),
    role: z
        .string()
        .refine(
            async (role) => {
                await connect();
                const exists = Role.findOne({ _id: role });
                return exists;
            }, "This role can not exist"
        ),
    is_verified: z
        .boolean({ message: "Is varified field type boolean" })
        .default(true),
    is_active: z
        .boolean({ message: "Is active field type boolean" })
        .default(true),
    token: z
        .string()
        .optional(),
    address: z
        .string()
        .max(255, { message: "Address should be at max 255 character" })
        .optional(),
    designation_id: z
        .string({required_error:"Designation should be required"})
        .refine(
            async (designation_id) => {
                await connect();
                const exists = await Designation.findOne({ _id: designation_id });
                return exists;
            }, "This designation can not exist"
        ),
    department_id: z
        .string({required_error:"Depertment should be required"})
        .refine(
            async (department_id) => {
                await connect();
                const exists = await Department.findOne({ _id: department_id });
                return exists;
            }, "This department can not exist"
        )
})
const updateUserSchema = z.object({
    full_name: z
        .string()
        .max(255, { message: "Full name should be at last 255 character" })
        .optional(),
    email: z
        .string({ required_error: "Email is required" })
        .min(1, { message: "Email should be at min 1 character" })
        .email({ message: "This is a email field" })
        .optional(),
    password: z
        .string()
        .min(4, { message: "Password should be at min 4 character" })
        .max(255, { message: "Password should be at max 255 character" })
        .optional(),
    role: z
        .string()
        .refine(
            async (role) => {
                await connect();
                const exists = Role.findOne({ _id: role });
                return exists;
            }, "This role can not exist"
        ).optional(),
    is_verified: z
        .boolean({ message: "is varified field type boolean" })
        .default(true)
        .optional(),
    is_active: z
        .boolean({ message: "is active field type boolean" })
        .default(true)
        .optional(),
    token: z
        .string()
        .optional(),
    address: z
        .string()
        .max(255, { message: "Address should be at max 255 character" })
        .optional(),
    designation_id: z
        .string()
        .refine(
            async (designation_id) => {
                await connect();
                const exists = await Designation.findOne({ _id: designation_id });
                return exists;
            }, "This designation can not exist"
        ).optional(),
    department_id: z
        .string()
        .refine(
            async (department_id) => {
                await connect();
                const exists = await Department.findOne({ _id: department_id });
                return exists;
            }, "This department can not exist"
        )
        .optional()
})
module.exports = {
    createUserSchema,
    updateUserSchema
}