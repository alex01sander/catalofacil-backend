import { z } from 'zod';
import { credit_accountsUpdateWithoutCredit_transactionsInputObjectSchema } from './credit_accountsUpdateWithoutCredit_transactionsInput.schema';
import { credit_accountsUncheckedUpdateWithoutCredit_transactionsInputObjectSchema } from './credit_accountsUncheckedUpdateWithoutCredit_transactionsInput.schema';
import { credit_accountsCreateWithoutCredit_transactionsInputObjectSchema } from './credit_accountsCreateWithoutCredit_transactionsInput.schema';
import { credit_accountsUncheckedCreateWithoutCredit_transactionsInputObjectSchema } from './credit_accountsUncheckedCreateWithoutCredit_transactionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.credit_accountsUpsertWithoutCredit_transactionsInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () =>
            credit_accountsUpdateWithoutCredit_transactionsInputObjectSchema,
        ),
        z.lazy(
          () =>
            credit_accountsUncheckedUpdateWithoutCredit_transactionsInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () =>
            credit_accountsCreateWithoutCredit_transactionsInputObjectSchema,
        ),
        z.lazy(
          () =>
            credit_accountsUncheckedCreateWithoutCredit_transactionsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const credit_accountsUpsertWithoutCredit_transactionsInputObjectSchema =
  Schema;
