import { z } from 'zod';
import { credit_transactionsCreateWithoutCredit_accountsInputObjectSchema } from './credit_transactionsCreateWithoutCredit_accountsInput.schema';
import { credit_transactionsUncheckedCreateWithoutCredit_accountsInputObjectSchema } from './credit_transactionsUncheckedCreateWithoutCredit_accountsInput.schema';
import { credit_transactionsCreateOrConnectWithoutCredit_accountsInputObjectSchema } from './credit_transactionsCreateOrConnectWithoutCredit_accountsInput.schema';
import { credit_transactionsUpsertWithWhereUniqueWithoutCredit_accountsInputObjectSchema } from './credit_transactionsUpsertWithWhereUniqueWithoutCredit_accountsInput.schema';
import { credit_transactionsCreateManyCredit_accountsInputEnvelopeObjectSchema } from './credit_transactionsCreateManyCredit_accountsInputEnvelope.schema';
import { credit_transactionsWhereUniqueInputObjectSchema } from './credit_transactionsWhereUniqueInput.schema';
import { credit_transactionsUpdateWithWhereUniqueWithoutCredit_accountsInputObjectSchema } from './credit_transactionsUpdateWithWhereUniqueWithoutCredit_accountsInput.schema';
import { credit_transactionsUpdateManyWithWhereWithoutCredit_accountsInputObjectSchema } from './credit_transactionsUpdateManyWithWhereWithoutCredit_accountsInput.schema';
import { credit_transactionsScalarWhereInputObjectSchema } from './credit_transactionsScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.credit_transactionsUncheckedUpdateManyWithoutCredit_accountsNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              credit_transactionsUpsertWithWhereUniqueWithoutCredit_accountsInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                credit_transactionsUpsertWithWhereUniqueWithoutCredit_accountsInputObjectSchema,
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
      set: z
        .union([
          z.lazy(() => credit_transactionsWhereUniqueInputObjectSchema),
          z.lazy(() => credit_transactionsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => credit_transactionsWhereUniqueInputObjectSchema),
          z.lazy(() => credit_transactionsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => credit_transactionsWhereUniqueInputObjectSchema),
          z.lazy(() => credit_transactionsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => credit_transactionsWhereUniqueInputObjectSchema),
          z.lazy(() => credit_transactionsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              credit_transactionsUpdateWithWhereUniqueWithoutCredit_accountsInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                credit_transactionsUpdateWithWhereUniqueWithoutCredit_accountsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              credit_transactionsUpdateManyWithWhereWithoutCredit_accountsInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                credit_transactionsUpdateManyWithWhereWithoutCredit_accountsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => credit_transactionsScalarWhereInputObjectSchema),
          z.lazy(() => credit_transactionsScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const credit_transactionsUncheckedUpdateManyWithoutCredit_accountsNestedInputObjectSchema =
  Schema;
