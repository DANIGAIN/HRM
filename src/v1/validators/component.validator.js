const { z } = require('zod')
const connect = require('../../config/db.config');
const Component = require('../models/component.model');

const createComponentSchema = z.object({
    name: z
        .string({ required_error: "Component name is required" })
        .min(1, { message: "Component name should be at least 1 letter" })
        .max(255, { message: "Component name should be at max 255 letter" })
        .refine(
            async (name) => {
                await connect();
                const exist = await Component.findOne({ name });
                return !exist;
            }, "This name is already exists"
        ),
    isActive: z
        .boolean()
        .default(true)
});

const updateComponentSchema = z.object({
    name: z
        .string({ required_error: "Component name is required" })
        .min(1, { message: "Component name should be at least 1 letter" })
        .max(255, { message: "Component name should be at max 255 letter" })
        .optional()
        .refine(
            async (name) => {
                await connect();
                const exist = await Component.findOne({ name });
                return !exist;
            }, "This name is already exists"
        ),
    isActive: z
        .boolean()
        .default(true)
        .optional()
})



module.exports = {
    createComponentSchema,
    updateComponentSchema
}