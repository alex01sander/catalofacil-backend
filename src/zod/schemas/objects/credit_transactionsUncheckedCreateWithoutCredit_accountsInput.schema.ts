import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.credit_transactionsUncheckedCreateWithoutCredit_accountsInput> =
  z
    .object({
      id: z.string().optional(),
      user_id: z.string(),
      type: z.string(),
      amount: z.number(),
      description: z.string().optional().nullable(),
      date: z.coerce.date().optional(),
      created_at: z.coerce.date().optional(),
    })
    .strict();

export const credit_transactionsUncheckedCreateWithoutCredit_accountsInputObjectSchema =
  Schema;
