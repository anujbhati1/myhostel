import { z } from "zod";

export const SignupValidator = z.object({
  name: z.string().trim().min(1, { message: "Enter your name" }),
  mobile: z.string().length(10, { message: "Enter valid mobile" }),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email({ message: "Please enter valid email" }),
  city: z.string().trim().min(1, { message: "Enter you city" }),
  password: z
    .string()
    .trim()
    .min(8, { message: "Password must be at least 8 characters long" }),
});

export type SignupValidatorType = z.infer<typeof SignupValidator>;
