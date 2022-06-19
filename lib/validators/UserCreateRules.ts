import { object, string } from 'yup'

export default object({
  name: string().required().min(3).max(64),
  email: string().required().email(),
  password: string().required().min(8).max(64),
  role: string().notRequired().oneOf(['user', 'admin', 'editor', 'author']),
})
