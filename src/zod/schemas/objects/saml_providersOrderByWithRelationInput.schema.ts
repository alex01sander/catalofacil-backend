import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { sso_providersOrderByWithRelationInputObjectSchema } from './sso_providersOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saml_providersOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    sso_provider_id: z.lazy(() => SortOrderSchema).optional(),
    entity_id: z.lazy(() => SortOrderSchema).optional(),
    metadata_xml: z.lazy(() => SortOrderSchema).optional(),
    metadata_url: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    attribute_mapping: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
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
    name_id_format: z
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

export const saml_providersOrderByWithRelationInputObjectSchema = Schema;
