import { z } from 'zod';
import { mfa_factorsCreateWithoutMfa_challengesInputObjectSchema } from './mfa_factorsCreateWithoutMfa_challengesInput.schema';
import { mfa_factorsUncheckedCreateWithoutMfa_challengesInputObjectSchema } from './mfa_factorsUncheckedCreateWithoutMfa_challengesInput.schema';
import { mfa_factorsCreateOrConnectWithoutMfa_challengesInputObjectSchema } from './mfa_factorsCreateOrConnectWithoutMfa_challengesInput.schema';
import { mfa_factorsWhereUniqueInputObjectSchema } from './mfa_factorsWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.mfa_factorsCreateNestedOneWithoutMfa_challengesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => mfa_factorsCreateWithoutMfa_challengesInputObjectSchema),
          z.lazy(
            () =>
              mfa_factorsUncheckedCreateWithoutMfa_challengesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            mfa_factorsCreateOrConnectWithoutMfa_challengesInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => mfa_factorsWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const mfa_factorsCreateNestedOneWithoutMfa_challengesInputObjectSchema =
  Schema;
