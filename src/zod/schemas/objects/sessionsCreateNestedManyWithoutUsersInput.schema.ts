import { z } from 'zod';
import { sessionsCreateWithoutUsersInputObjectSchema } from './sessionsCreateWithoutUsersInput.schema';
import { sessionsUncheckedCreateWithoutUsersInputObjectSchema } from './sessionsUncheckedCreateWithoutUsersInput.schema';
import { sessionsCreateOrConnectWithoutUsersInputObjectSchema } from './sessionsCreateOrConnectWithoutUsersInput.schema';
import { sessionsCreateManyUsersInputEnvelopeObjectSchema } from './sessionsCreateManyUsersInputEnvelope.schema';
import { sessionsWhereUniqueInputObjectSchema } from './sessionsWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.sessionsCreateNestedManyWithoutUsersInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => sessionsCreateWithoutUsersInputObjectSchema),
        z.lazy(() => sessionsCreateWithoutUsersInputObjectSchema).array(),
        z.lazy(() => sessionsUncheckedCreateWithoutUsersInputObjectSchema),
        z
          .lazy(() => sessionsUncheckedCreateWithoutUsersInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => sessionsCreateOrConnectWithoutUsersInputObjectSchema),
        z
          .lazy(() => sessionsCreateOrConnectWithoutUsersInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => sessionsCreateManyUsersInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => sessionsWhereUniqueInputObjectSchema),
        z.lazy(() => sessionsWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const sessionsCreateNestedManyWithoutUsersInputObjectSchema = Schema;
