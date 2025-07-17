import { z } from 'zod';
import { identitiesCreateWithoutUsersInputObjectSchema } from './identitiesCreateWithoutUsersInput.schema';
import { identitiesUncheckedCreateWithoutUsersInputObjectSchema } from './identitiesUncheckedCreateWithoutUsersInput.schema';
import { identitiesCreateOrConnectWithoutUsersInputObjectSchema } from './identitiesCreateOrConnectWithoutUsersInput.schema';
import { identitiesUpsertWithWhereUniqueWithoutUsersInputObjectSchema } from './identitiesUpsertWithWhereUniqueWithoutUsersInput.schema';
import { identitiesCreateManyUsersInputEnvelopeObjectSchema } from './identitiesCreateManyUsersInputEnvelope.schema';
import { identitiesWhereUniqueInputObjectSchema } from './identitiesWhereUniqueInput.schema';
import { identitiesUpdateWithWhereUniqueWithoutUsersInputObjectSchema } from './identitiesUpdateWithWhereUniqueWithoutUsersInput.schema';
import { identitiesUpdateManyWithWhereWithoutUsersInputObjectSchema } from './identitiesUpdateManyWithWhereWithoutUsersInput.schema';
import { identitiesScalarWhereInputObjectSchema } from './identitiesScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.identitiesUpdateManyWithoutUsersNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => identitiesCreateWithoutUsersInputObjectSchema),
        z.lazy(() => identitiesCreateWithoutUsersInputObjectSchema).array(),
        z.lazy(() => identitiesUncheckedCreateWithoutUsersInputObjectSchema),
        z
          .lazy(() => identitiesUncheckedCreateWithoutUsersInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => identitiesCreateOrConnectWithoutUsersInputObjectSchema),
        z
          .lazy(() => identitiesCreateOrConnectWithoutUsersInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => identitiesUpsertWithWhereUniqueWithoutUsersInputObjectSchema,
        ),
        z
          .lazy(
            () => identitiesUpsertWithWhereUniqueWithoutUsersInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => identitiesCreateManyUsersInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => identitiesWhereUniqueInputObjectSchema),
        z.lazy(() => identitiesWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => identitiesWhereUniqueInputObjectSchema),
        z.lazy(() => identitiesWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => identitiesWhereUniqueInputObjectSchema),
        z.lazy(() => identitiesWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => identitiesWhereUniqueInputObjectSchema),
        z.lazy(() => identitiesWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => identitiesUpdateWithWhereUniqueWithoutUsersInputObjectSchema,
        ),
        z
          .lazy(
            () => identitiesUpdateWithWhereUniqueWithoutUsersInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => identitiesUpdateManyWithWhereWithoutUsersInputObjectSchema,
        ),
        z
          .lazy(
            () => identitiesUpdateManyWithWhereWithoutUsersInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => identitiesScalarWhereInputObjectSchema),
        z.lazy(() => identitiesScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const identitiesUpdateManyWithoutUsersNestedInputObjectSchema = Schema;
