const {z} = require('zod')
const User = require('./../models/grade.model');

const createGradeSchema = z.object({
    grade_name: z.string().min(1).max(255).refine(
        async (grade_name) => {
          const existingUser = await User.findOne({grade_name});
          return !existingUser;
        },'Grade Name already exists'
      )
})

module.exports = {
    createGradeSchema,
}