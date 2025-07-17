import { z } from 'zod';
import { identitiesProvider_idProviderCompoundUniqueInputObjectSchema } from './identitiesProvider_idProviderCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.identitiesWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    provider_id_provider: z
      .lazy(() => identitiesProvider_idProviderCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const identitiesWhereUniqueInputObjectSchema = Schema;
