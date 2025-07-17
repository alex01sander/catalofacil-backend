import { z } from 'zod';
import { one_time_tokensCreateWithoutUsersInputObjectSchema } from './one_time_tokensCreateWithoutUsersInput.schema';
import { one_time_tokensUncheckedCreateWithoutUsersInputObjectSchema } from './one_time_tokensUncheckedCreateWithoutUsersInput.schema';
import { one_time_tokensCreateOrConnectWithoutUsersInputObjectSchema } from './one_time_tokensCreateOrConnectWithoutUsersInput.schema';
import { one_time_tokensCreateManyUsersInputEnvelopeObjectSchema } from './one_time_tokensCreateManyUsersInputEnvelope.schema';
import { one_time_tokensWhereUniqueInputObjectSchema } from './one_time_tokensWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.one_time_tokensUncheckedCreateNestedManyWithoutUsersInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => one_time_tokensCreateWithoutUsersInputObjectSchema),
          z
            .lazy(() => one_time_tokensCreateWithoutUsersInputObjectSchema)
            .array(),
          z.lazy(
            () => one_time_tokensUncheckedCreateWithoutUsersInputObjectSchema,
          ),
          z
            .lazy(
              () => one_time_tokensUncheckedCreateWithoutUsersInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => one_time_tokensCreateOrConnectWithoutUsersInputObjectSchema,
          ),
          z
            .lazy(
              () => one_time_tokensCreateOrConnectWithoutUsersInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => one_time_tokensCreateManyUsersInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => one_time_tokensWhereUniqueInputObjectSchema),
          z.lazy(() => one_time_tokensWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const one_time_tokensUncheckedCreateNestedManyWithoutUsersInputObjectSchema =
  Schema;
