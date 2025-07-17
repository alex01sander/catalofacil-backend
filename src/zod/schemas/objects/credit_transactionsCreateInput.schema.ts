import { z } from 'zod';
import { credit_accountsCreateNestedOneWithoutCredit_transactionsInputObjectSchema } from './credit_accountsCreateNestedOneWithoutCredit_transactionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.credit_transactionsCreateInput> = z
  .object({
    id: z.string().optional(),
    user_id: z.string(),
    type: z.string(),
    amount: z.number(),
    description: z.string().optional().nullable(),
    date: z.coerce.date().optional(),
    created_at: z.coerce.date().optional(),
    credit_accounts: z.lazy(
      () =>
        credit_accountsCreateNestedOneWithoutCredit_transactionsInputObjectSchema,
    ),
  })
  .strict();

export const credit_transactionsCreateInputObjectSchema = Schema;
