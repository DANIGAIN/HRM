const { z } = require('zod');
const connect = require('./../../config/db.config');
const User = require('./../models/user.model');

const createProcurementSchema = z.object({
    requester_id: z
      .string({ required_error: "Requester id is required" })
      .refine(
        async (requester_id) => {
          await connect();
          const exist = await User.findOne({ _id: requester_id });
          return exist;
        }, "This requester user can not exist"
      ),
    approver_id: z  
      .string({ required_error: "Approver id is required" })
      .refine(
        async (approver_id) => {
          await connect();
          const exist = await User.findOne({ _id: approver_id });
          return exist;
        }, "This Approver user can not exist")
  })
const updateProcurementSchema = z.object({
    requester_id: z
        .string()
        .refine(
            async (requester_id) => {
                await connect()
                const exist = await User.findOne({ _id: requester_id });
                return exist;
            }, "This requester user can not exist"
        )
        .optional(),
    approver_id: z
        .string({ required_error: "Approver id is required" })
        .refine(
            async (approver_id) => {
                await connect();
                const exist = await User.findOne({ _id: approver_id });
                return exist;
            }, "This Approver user can not exist")
        .optional()
}
)

module.exports = {
    createProcurementSchema,
    updateProcurementSchema
}