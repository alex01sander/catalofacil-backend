import { z } from 'zod';
import { mfa_factorsCreateWithoutMfa_challengesInputObjectSchema } from './mfa_factorsCreateWithoutMfa_challengesInput.schema';
import { mfa_factorsUncheckedCreateWithoutMfa_challengesInputObjectSchema } from './mfa_factorsUncheckedCreateWithoutMfa_challengesInput.schema';
import { mfa_factorsCreateOrConnectWithoutMfa_challengesInputObjectSchema } from './mfa_factorsCreateOrConnectWithoutMfa_challengesInput.schema';
import { mfa_factorsUpsertWithoutMfa_challengesInputObjectSchema } from './mfa_factorsUpsertWithoutMfa_challengesInput.schema';
import { mfa_factorsWhereUniqueInputObjectSchema } from './mfa_factorsWhereUniqueInput.schema';
import { mfa_factorsUpdateWithoutMfa_challengesInputObjectSchema } from './mfa_factorsUpdateWithoutMfa_challengesInput.schema';
import { mfa_factorsUncheckedUpdateWithoutMfa_challengesInputObjectSchema } from './mfa_factorsUncheckedUpdateWithoutMfa_challengesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.mfa_factorsUpdateOneRequiredWithoutMfa_challengesNestedInput> =
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
      upsert: z
        .lazy(() => mfa_factorsUpsertWithoutMfa_challengesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => mfa_factorsWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => mfa_factorsUpdateWithoutMfa_challengesInputObjectSchema),
          z.lazy(
            () =>
              mfa_factorsUncheckedUpdateWithoutMfa_challengesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const mfa_factorsUpdateOneRequiredWithoutMfa_challengesNestedInputObjectSchema =
  Schema;
