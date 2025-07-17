import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.credit_accountsUncheckedCreateWithoutCredit_transactionsInput> =
  z
    .object({
      id: z.string().optional(),
      user_id: z.string(),
      store_id: z.string().optional().nullable(),
      customer_name: z.string(),
      customer_phone: z.string().optional().nullable(),
      total_debt: z.number().optional(),
      created_at: z.coerce.date().optional(),
      updated_at: z.coerce.date().optional(),
      status: z.string().optional(),
    })
    .strict();

export const credit_accountsUncheckedCreateWithoutCredit_transactionsInputObjectSchema =
  Schema;
