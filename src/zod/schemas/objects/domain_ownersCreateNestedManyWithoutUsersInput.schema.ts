import { z } from 'zod';
import { domain_ownersCreateWithoutUsersInputObjectSchema } from './domain_ownersCreateWithoutUsersInput.schema';
import { domain_ownersUncheckedCreateWithoutUsersInputObjectSchema } from './domain_ownersUncheckedCreateWithoutUsersInput.schema';
import { domain_ownersCreateOrConnectWithoutUsersInputObjectSchema } from './domain_ownersCreateOrConnectWithoutUsersInput.schema';
import { domain_ownersCreateManyUsersInputEnvelopeObjectSchema } from './domain_ownersCreateManyUsersInputEnvelope.schema';
import { domain_ownersWhereUniqueInputObjectSchema } from './domain_ownersWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.domain_ownersCreateNestedManyWithoutUsersInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => domain_ownersCreateWithoutUsersInputObjectSchema),
          z
            .lazy(() => domain_ownersCreateWithoutUsersInputObjectSchema)
            .array(),
          z.lazy(
            () => domain_ownersUncheckedCreateWithoutUsersInputObjectSchema,
          ),
          z
            .lazy(
              () => domain_ownersUncheckedCreateWithoutUsersInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => domain_ownersCreateOrConnectWithoutUsersInputObjectSchema,
          ),
          z
            .lazy(
              () => domain_ownersCreateOrConnectWithoutUsersInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => domain_ownersCreateManyUsersInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => domain_ownersWhereUniqueInputObjectSchema),
          z.lazy(() => domain_ownersWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const domain_ownersCreateNestedManyWithoutUsersInputObjectSchema =
  Schema;
