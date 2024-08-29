import * as z from "zod";


export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email must be required"
  }),
  password: z.string().min(1, {
    message: "Password must be required!"
  }).max(10)
})
export const RegisterSchema = z.object({

  name: z.string().min(1, {
    message: "Name is required!"
  }),
  email: z.string().email({
    message: "Email must be required"
  }),
  password: z.string().min(1, {
    message: "Password must be required!"
  }).max(10)
})


