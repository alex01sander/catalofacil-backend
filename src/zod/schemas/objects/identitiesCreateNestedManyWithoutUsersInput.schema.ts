import { z } from 'zod';
import { identitiesCreateWithoutUsersInputObjectSchema } from './identitiesCreateWithoutUsersInput.schema';
import { identitiesUncheckedCreateWithoutUsersInputObjectSchema } from './identitiesUncheckedCreateWithoutUsersInput.schema';
import { identitiesCreateOrConnectWithoutUsersInputObjectSchema } from './identitiesCreateOrConnectWithoutUsersInput.schema';
import { identitiesCreateManyUsersInputEnvelopeObjectSchema } from './identitiesCreateManyUsersInputEnvelope.schema';
import { identitiesWhereUniqueInputObjectSchema } from './identitiesWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.identitiesCreateNestedManyWithoutUsersInput> = z
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
    createMany: z
      .lazy(() => identitiesCreateManyUsersInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => identitiesWhereUniqueInputObjectSchema),
        z.lazy(() => identitiesWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const identitiesCreateNestedManyWithoutUsersInputObjectSchema = Schema;
