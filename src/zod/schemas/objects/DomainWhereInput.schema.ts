import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { ProductListRelationFilterObjectSchema } from './ProductListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DomainWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => DomainWhereInputObjectSchema),
        z.lazy(() => DomainWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => DomainWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => DomainWhereInputObjectSchema),
        z.lazy(() => DomainWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    slug: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    userId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    user: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
    products: z.lazy(() => ProductListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const DomainWhereInputObjectSchema = Schema;
