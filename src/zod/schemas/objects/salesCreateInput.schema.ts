import { z } from 'zod';
import { storesCreateNestedOneWithoutSalesInputObjectSchema } from './storesCreateNestedOneWithoutSalesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.salesCreateInput> = z
  .object({
    id: z.string().optional(),
    user_id: z.string(),
    product_name: z.string(),
    quantity: z.number().optional(),
    unit_price: z.number(),
    total_price: z.number(),
    sale_date: z.coerce.date(),
    status: z.string().optional(),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional(),
    stores: z
      .lazy(() => storesCreateNestedOneWithoutSalesInputObjectSchema)
      .optional(),
  })
  .strict();

export const salesCreateInputObjectSchema = Schema;
