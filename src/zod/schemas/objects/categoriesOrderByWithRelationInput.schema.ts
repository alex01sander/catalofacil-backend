import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { storesOrderByWithRelationInputObjectSchema } from './storesOrderByWithRelationInput.schema';
import { usersOrderByWithRelationInputObjectSchema } from './usersOrderByWithRelationInput.schema';
import { productsOrderByRelationAggregateInputObjectSchema } from './productsOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.categoriesOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    color: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    image: z
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
    store_id: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    stores: z.lazy(() => storesOrderByWithRelationInputObjectSchema).optional(),
    users: z.lazy(() => usersOrderByWithRelationInputObjectSchema).optional(),
    products: z
      .lazy(() => productsOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const categoriesOrderByWithRelationInputObjectSchema = Schema;
