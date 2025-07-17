import { z } from 'zod';
import { DomainCreateWithoutUserInputObjectSchema } from './DomainCreateWithoutUserInput.schema';
import { DomainUncheckedCreateWithoutUserInputObjectSchema } from './DomainUncheckedCreateWithoutUserInput.schema';
import { DomainCreateOrConnectWithoutUserInputObjectSchema } from './DomainCreateOrConnectWithoutUserInput.schema';
import { DomainUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './DomainUpsertWithWhereUniqueWithoutUserInput.schema';
import { DomainCreateManyUserInputEnvelopeObjectSchema } from './DomainCreateManyUserInputEnvelope.schema';
import { DomainWhereUniqueInputObjectSchema } from './DomainWhereUniqueInput.schema';
import { DomainUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './DomainUpdateWithWhereUniqueWithoutUserInput.schema';
import { DomainUpdateManyWithWhereWithoutUserInputObjectSchema } from './DomainUpdateManyWithWhereWithoutUserInput.schema';
import { DomainScalarWhereInputObjectSchema } from './DomainScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DomainUncheckedUpdateManyWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => DomainCreateWithoutUserInputObjectSchema),
          z.lazy(() => DomainCreateWithoutUserInputObjectSchema).array(),
          z.lazy(() => DomainUncheckedCreateWithoutUserInputObjectSchema),
          z
            .lazy(() => DomainUncheckedCreateWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => DomainCreateOrConnectWithoutUserInputObjectSchema),
          z
            .lazy(() => DomainCreateOrConnectWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => DomainUpsertWithWhereUniqueWithoutUserInputObjectSchema),
          z
            .lazy(() => DomainUpsertWithWhereUniqueWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => DomainCreateManyUserInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => DomainWhereUniqueInputObjectSchema),
          z.lazy(() => DomainWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => DomainWhereUniqueInputObjectSchema),
          z.lazy(() => DomainWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => DomainWhereUniqueInputObjectSchema),
          z.lazy(() => DomainWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => DomainWhereUniqueInputObjectSchema),
          z.lazy(() => DomainWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => DomainUpdateWithWhereUniqueWithoutUserInputObjectSchema),
          z
            .lazy(() => DomainUpdateWithWhereUniqueWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => DomainUpdateManyWithWhereWithoutUserInputObjectSchema),
          z
            .lazy(() => DomainUpdateManyWithWhereWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => DomainScalarWhereInputObjectSchema),
          z.lazy(() => DomainScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const DomainUncheckedUpdateManyWithoutUserNestedInputObjectSchema =
  Schema;
