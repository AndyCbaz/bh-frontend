import { z } from 'zod';

export const forgotPasswordSchema = z.object({
  mail: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({
      message: 'Please enter a valid email',
    }),
});
