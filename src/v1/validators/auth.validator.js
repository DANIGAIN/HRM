const { z } = require('zod');

const createUserSchema = z.object({
    full_name: z.string().max(255).optional(),
    email: z.string().min(1).email(),
    password: z.string().min(4).max(255),
    role: z.object({
        id: z.instanceof(mongoose.Types.ObjectId),
        ref: z.literal('Role')
    }),
    is_verified: z.boolean().default(true),
    is_active: z.boolean().default(true),
    token: z.string(),
    address: z.string().max(255),
    designation_id: z.object({
        id: z.instanceof(mongoose.Types.ObjectId),
        ref: z.literal('Designation')
    }),
    department_id: z.object({
        id: z.instanceof(mongoose.Types.ObjectId),
        ref: z.literal('Department')
    })
})
module.exports = {
    createUserSchema
}