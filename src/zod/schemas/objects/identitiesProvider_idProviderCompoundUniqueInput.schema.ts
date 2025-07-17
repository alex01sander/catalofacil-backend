import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.identitiesProvider_idProviderCompoundUniqueInput> =
  z
    .object({
      provider_id: z.string(),
      provider: z.string(),
    })
    .strict();

export const identitiesProvider_idProviderCompoundUniqueInputObjectSchema =
  Schema;
