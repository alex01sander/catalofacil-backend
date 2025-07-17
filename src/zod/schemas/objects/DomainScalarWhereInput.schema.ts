import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DomainScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => DomainScalarWhereInputObjectSchema),
        z.lazy(() => DomainScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => DomainScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => DomainScalarWhereInputObjectSchema),
        z.lazy(() => DomainScalarWhereInputObjectSchema).array(),
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
  })
  .strict();

export const DomainScalarWhereInputObjectSchema = Schema;
