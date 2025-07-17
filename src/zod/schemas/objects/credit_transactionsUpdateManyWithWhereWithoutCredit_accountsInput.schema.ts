import { z } from 'zod';
import { credit_transactionsScalarWhereInputObjectSchema } from './credit_transactionsScalarWhereInput.schema';
import { credit_transactionsUpdateManyMutationInputObjectSchema } from './credit_transactionsUpdateManyMutationInput.schema';
import { credit_transactionsUncheckedUpdateManyWithoutCredit_transactionsInputObjectSchema } from './credit_transactionsUncheckedUpdateManyWithoutCredit_transactionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.credit_transactionsUpdateManyWithWhereWithoutCredit_accountsInput> =
  z
    .object({
      where: z.lazy(() => credit_transactionsScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => credit_transactionsUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            credit_transactionsUncheckedUpdateManyWithoutCredit_transactionsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const credit_transactionsUpdateManyWithWhereWithoutCredit_accountsInputObjectSchema =
  Schema;
