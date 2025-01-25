import {z} from 'zod';

export const SignupValidator = z.object({
  name: z.string().trim().min(1, {message: 'Enter your name'}),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email({message: 'Please enter valid email'}),
  password: z
    .string()
    .trim()
    .min(8, {message: 'Password must be at least 8 characters long'}),
});

export type SignupValidatorType = z.infer<typeof SignupValidator>;
