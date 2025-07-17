import { z } from 'zod';
import { credit_accountsCreateWithoutCredit_transactionsInputObjectSchema } from './credit_accountsCreateWithoutCredit_transactionsInput.schema';
import { credit_accountsUncheckedCreateWithoutCredit_transactionsInputObjectSchema } from './credit_accountsUncheckedCreateWithoutCredit_transactionsInput.schema';
import { credit_accountsCreateOrConnectWithoutCredit_transactionsInputObjectSchema } from './credit_accountsCreateOrConnectWithoutCredit_transactionsInput.schema';
import { credit_accountsWhereUniqueInputObjectSchema } from './credit_accountsWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.credit_accountsCreateNestedOneWithoutCredit_transactionsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              credit_accountsCreateWithoutCredit_transactionsInputObjectSchema,
          ),
          z.lazy(
            () =>
              credit_accountsUncheckedCreateWithoutCredit_transactionsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            credit_accountsCreateOrConnectWithoutCredit_transactionsInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => credit_accountsWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const credit_accountsCreateNestedOneWithoutCredit_transactionsInputObjectSchema =
  Schema;
