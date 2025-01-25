import { z } from "zod";

export const LoginValidator = z.object({
  mobile: z.string().length(10, { message: "Please enter a valid mobile" }),
  password: z
    .string()
    .trim()
    .min(8, { message: "Password must be at least 8 characters long." }),
});

export type LoginValidatorType = z.infer<typeof LoginValidator>;
