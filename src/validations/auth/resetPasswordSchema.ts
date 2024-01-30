import { z } from 'zod';

export const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(1, { message: 'Password is required' })
      .min(5, { message: 'Password must be at least 5 characters long' }),
    repassword: z
      .string()
      .min(1, { message: 'Confirm Password is required' })
      .min(5, {
        message: 'Confirm Password must be at least 5 characters long',
      }),
  })
  .refine((data) => data.password === data.repassword, {
    message: 'Passwords do not match',
    path: ['repassword'],
  });
