import { z } from 'zod';
import { credit_transactionsWhereUniqueInputObjectSchema } from './credit_transactionsWhereUniqueInput.schema';
import { credit_transactionsUpdateWithoutCredit_accountsInputObjectSchema } from './credit_transactionsUpdateWithoutCredit_accountsInput.schema';
import { credit_transactionsUncheckedUpdateWithoutCredit_accountsInputObjectSchema } from './credit_transactionsUncheckedUpdateWithoutCredit_accountsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.credit_transactionsUpdateWithWhereUniqueWithoutCredit_accountsInput> =
  z
    .object({
      where: z.lazy(() => credit_transactionsWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () =>
            credit_transactionsUpdateWithoutCredit_accountsInputObjectSchema,
        ),
        z.lazy(
          () =>
            credit_transactionsUncheckedUpdateWithoutCredit_accountsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const credit_transactionsUpdateWithWhereUniqueWithoutCredit_accountsInputObjectSchema =
  Schema;
