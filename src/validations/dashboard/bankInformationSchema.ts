import { z } from 'zod';

export const bankInformationSchema = z.object({
  accountHolderName: z
    .string()
    .min(1, { message: 'Account holder name is required' }),
  routingNumber: z
    .string()
    .min(1, { message: 'Routing number is required' })
    .refine((value) => /^[0-9]+$/.test(value), {
      message: 'Routing number must be numeric',
    }),
  accountNumber1: z
    .string()
    .min(1, { message: 'Account number is required' })
    .refine((value) => /^[0-9]+$/.test(value), {
      message: 'Account number must be numeric',
    }),
  accountNumber2: z
    .string()
    .min(1, { message: 'Account number is required' })
    .refine((value) => /^[0-9]+$/.test(value), {
      message: 'Account number must be numeric',
    }),
});
