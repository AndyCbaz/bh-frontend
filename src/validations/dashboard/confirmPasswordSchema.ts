import { z } from 'zod';

export const confirmPasswordSchema = z.object({
      password: z
      .string()
      .min(1, { message: 'Password is required' })
      .min(5, { message: 'Password must be at least 5 characters long' }),
});
