import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { sso_providersOrderByWithRelationInputObjectSchema } from './sso_providersOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.sso_domainsOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    sso_provider_id: z.lazy(() => SortOrderSchema).optional(),
    domain: z.lazy(() => SortOrderSchema).optional(),
    created_at: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    updated_at: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    sso_providers: z
      .lazy(() => sso_providersOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const sso_domainsOrderByWithRelationInputObjectSchema = Schema;
