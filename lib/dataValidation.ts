import { ValidationError } from 'apollo-server-micro'
import { InferType, ObjectSchema } from 'yup'

const dataValidation = <T extends {}>(args: any, rules: ObjectSchema<T>) => {
  try {
    const validated = rules.validateSync(args)
    return validated
  } catch (error: any) {
    throw new ValidationError(error.message)
  }
}

export default dataValidation
