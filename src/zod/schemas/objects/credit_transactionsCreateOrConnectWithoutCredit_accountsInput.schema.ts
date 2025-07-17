import { z } from 'zod';
import { credit_transactionsWhereUniqueInputObjectSchema } from './credit_transactionsWhereUniqueInput.schema';
import { credit_transactionsCreateWithoutCredit_accountsInputObjectSchema } from './credit_transactionsCreateWithoutCredit_accountsInput.schema';
import { credit_transactionsUncheckedCreateWithoutCredit_accountsInputObjectSchema } from './credit_transactionsUncheckedCreateWithoutCredit_accountsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.credit_transactionsCreateOrConnectWithoutCredit_accountsInput> =
  z
    .object({
      where: z.lazy(() => credit_transactionsWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () =>
            credit_transactionsCreateWithoutCredit_accountsInputObjectSchema,
        ),
        z.lazy(
          () =>
            credit_transactionsUncheckedCreateWithoutCredit_accountsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const credit_transactionsCreateOrConnectWithoutCredit_accountsInputObjectSchema =
  Schema;
