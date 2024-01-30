import { z } from 'zod';

export const loginSchema = z.object({
  correo: z.string().min(1, { message: 'Email is required' }).email({
    message: 'Please enter a valid email',
  }),
  clave: z
    .string()
    .min(1, { message: 'Password is required' })
    .min(4, {
      message: 'Password must be at least 4 characters long',
    })
    .max(20, {
      message: 'Password must be at most 20 characters long',
    }),
});
