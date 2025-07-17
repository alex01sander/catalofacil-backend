import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { saml_providersCountOrderByAggregateInputObjectSchema } from './saml_providersCountOrderByAggregateInput.schema';
import { saml_providersMaxOrderByAggregateInputObjectSchema } from './saml_providersMaxOrderByAggregateInput.schema';
import { saml_providersMinOrderByAggregateInputObjectSchema } from './saml_providersMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saml_providersOrderByWithAggregationInput> = z
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
    _count: z
      .lazy(() => saml_providersCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => saml_providersMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => saml_providersMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const saml_providersOrderByWithAggregationInputObjectSchema = Schema;
