import { z } from 'zod';
import { credit_transactionsUncheckedCreateNestedManyWithoutCredit_accountsInputObjectSchema } from './credit_transactionsUncheckedCreateNestedManyWithoutCredit_accountsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.credit_accountsUncheckedCreateInput> = z
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
    credit_transactions: z
      .lazy(
        () =>
          credit_transactionsUncheckedCreateNestedManyWithoutCredit_accountsInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const credit_accountsUncheckedCreateInputObjectSchema = Schema;
