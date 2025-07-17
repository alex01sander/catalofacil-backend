import { z } from 'zod';
import { storesCreateWithoutUsersInputObjectSchema } from './storesCreateWithoutUsersInput.schema';
import { storesUncheckedCreateWithoutUsersInputObjectSchema } from './storesUncheckedCreateWithoutUsersInput.schema';
import { storesCreateOrConnectWithoutUsersInputObjectSchema } from './storesCreateOrConnectWithoutUsersInput.schema';
import { storesCreateManyUsersInputEnvelopeObjectSchema } from './storesCreateManyUsersInputEnvelope.schema';
import { storesWhereUniqueInputObjectSchema } from './storesWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.storesUncheckedCreateNestedManyWithoutUsersInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => storesCreateWithoutUsersInputObjectSchema),
          z.lazy(() => storesCreateWithoutUsersInputObjectSchema).array(),
          z.lazy(() => storesUncheckedCreateWithoutUsersInputObjectSchema),
          z
            .lazy(() => storesUncheckedCreateWithoutUsersInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => storesCreateOrConnectWithoutUsersInputObjectSchema),
          z
            .lazy(() => storesCreateOrConnectWithoutUsersInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => storesCreateManyUsersInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => storesWhereUniqueInputObjectSchema),
          z.lazy(() => storesWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const storesUncheckedCreateNestedManyWithoutUsersInputObjectSchema =
  Schema;
