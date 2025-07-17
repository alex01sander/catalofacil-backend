import { z } from 'zod';
import { credit_accountsCreateWithoutCredit_transactionsInputObjectSchema } from './credit_accountsCreateWithoutCredit_transactionsInput.schema';
import { credit_accountsUncheckedCreateWithoutCredit_transactionsInputObjectSchema } from './credit_accountsUncheckedCreateWithoutCredit_transactionsInput.schema';
import { credit_accountsCreateOrConnectWithoutCredit_transactionsInputObjectSchema } from './credit_accountsCreateOrConnectWithoutCredit_transactionsInput.schema';
import { credit_accountsUpsertWithoutCredit_transactionsInputObjectSchema } from './credit_accountsUpsertWithoutCredit_transactionsInput.schema';
import { credit_accountsWhereUniqueInputObjectSchema } from './credit_accountsWhereUniqueInput.schema';
import { credit_accountsUpdateWithoutCredit_transactionsInputObjectSchema } from './credit_accountsUpdateWithoutCredit_transactionsInput.schema';
import { credit_accountsUncheckedUpdateWithoutCredit_transactionsInputObjectSchema } from './credit_accountsUncheckedUpdateWithoutCredit_transactionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.credit_accountsUpdateOneRequiredWithoutCredit_transactionsNestedInput> =
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
      upsert: z
        .lazy(
          () =>
            credit_accountsUpsertWithoutCredit_transactionsInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => credit_accountsWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              credit_accountsUpdateWithoutCredit_transactionsInputObjectSchema,
          ),
          z.lazy(
            () =>
              credit_accountsUncheckedUpdateWithoutCredit_transactionsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const credit_accountsUpdateOneRequiredWithoutCredit_transactionsNestedInputObjectSchema =
  Schema;
