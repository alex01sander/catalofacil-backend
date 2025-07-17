import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saml_providersCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    sso_provider_id: z.lazy(() => SortOrderSchema).optional(),
    entity_id: z.lazy(() => SortOrderSchema).optional(),
    metadata_xml: z.lazy(() => SortOrderSchema).optional(),
    metadata_url: z.lazy(() => SortOrderSchema).optional(),
    attribute_mapping: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    updated_at: z.lazy(() => SortOrderSchema).optional(),
    name_id_format: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const saml_providersCountOrderByAggregateInputObjectSchema = Schema;
