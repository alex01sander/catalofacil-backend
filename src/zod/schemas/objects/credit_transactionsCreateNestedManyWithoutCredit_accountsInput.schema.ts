import { z } from 'zod';
import { credit_transactionsCreateWithoutCredit_accountsInputObjectSchema } from './credit_transactionsCreateWithoutCredit_accountsInput.schema';
import { credit_transactionsUncheckedCreateWithoutCredit_accountsInputObjectSchema } from './credit_transactionsUncheckedCreateWithoutCredit_accountsInput.schema';
import { credit_transactionsCreateOrConnectWithoutCredit_accountsInputObjectSchema } from './credit_transactionsCreateOrConnectWithoutCredit_accountsInput.schema';
import { credit_transactionsCreateManyCredit_accountsInputEnvelopeObjectSchema } from './credit_transactionsCreateManyCredit_accountsInputEnvelope.schema';
import { credit_transactionsWhereUniqueInputObjectSchema } from './credit_transactionsWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.credit_transactionsCreateNestedManyWithoutCredit_accountsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              credit_transactionsCreateWithoutCredit_accountsInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                credit_transactionsCreateWithoutCredit_accountsInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              credit_transactionsUncheckedCreateWithoutCredit_accountsInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                credit_transactionsUncheckedCreateWithoutCredit_accountsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              credit_transactionsCreateOrConnectWithoutCredit_accountsInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                credit_transactionsCreateOrConnectWithoutCredit_accountsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            credit_transactionsCreateManyCredit_accountsInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => credit_transactionsWhereUniqueInputObjectSchema),
          z.lazy(() => credit_transactionsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const credit_transactionsCreateNestedManyWithoutCredit_accountsInputObjectSchema =
  Schema;
