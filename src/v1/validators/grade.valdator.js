const { z } = require('zod')
const connect = require('../../config/db.config');
const Grade = require('./../models/grade.model');

const createGradeSchema = z.object({
  grade_name: z
    .string({ required_error: "Grade name is required" })
    .min(1, { message: "Grade name should be at least 1 letter" })
    .max(255, { message: "Grade name should be at max 255 letter" }),
  grade_letter: z
    .string({ required_error: "Grade letter is required" })
    .min(1, { message: "Grade letter should be at least 1 letter" })
    .max(3, { message: "Grade letter should be at max 3 letter" })
    .refine(
      async (grade_name, grade_letter) => {
        await connect();
        const exist = await Grade.findOne({ grade_name, grade_letter });
        return !exist;
      }, 'This Grade Name and Grade letter already exists'
    ),
})
const updateGradeSchema = z.object({
  grade_name: z
    .string()
    .min(1, { message: "Grade name should be at least 1 letter" })
    .max(255, { message: "Grade name should be at max 255 letter" })
    .optional(),
  grade_letter: z
    .string()
    .min(1, { message: "Grade letter should be at least 1 letter" })
    .max(3, { message: "Grade letter should be at max 3 letter" })
    .optional(),
})



module.exports = {
  createGradeSchema,
  updateGradeSchema
}