import { z } from 'zod';

export const singupSchema = z.object({
  nombre: z.string().min(1, { message: 'El name is required' }),
  mail: z.string().min(1, { message: 'El mail is required' }).email(),
  password: z
    .string()
    .min(1, { message: 'Password is required' })
    .min(5, { message: 'Password must be at least 5 characters long' }),
  repassword: z
    .string()
    .min(1, { message: 'Password is required' })
    .min(5, { message: 'Password must be at least 5 characters long' }),
  alias: z.string().min(1, { message: 'Username is required' }),
}).refine((data) => data.password === data.repassword, {
  message: 'Passwords do not match',
  path: ['repassword'],
});

