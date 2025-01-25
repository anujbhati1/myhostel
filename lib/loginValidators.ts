import {z} from 'zod';

export const LoginValidator = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email({message: 'Please enter valid email'}),
  password: z
    .string()
    .trim()
    .min(8, {message: 'Password must be at least 8 characters long.'}),
});

export type LoginValidatorType = z.infer<typeof LoginValidator>;
