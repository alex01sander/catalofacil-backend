import { z } from 'zod';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { UuidNullableFilterObjectSchema } from './UuidNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.categoriesScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => categoriesScalarWhereInputObjectSchema),
        z.lazy(() => categoriesScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => categoriesScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => categoriesScalarWhereInputObjectSchema),
        z.lazy(() => categoriesScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
    user_id: z
      .union([z.lazy(() => UuidFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    color: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    image: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    created_at: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    updated_at: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    store_id: z
      .union([z.lazy(() => UuidNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
  })
  .strict();

export const categoriesScalarWhereInputObjectSchema = Schema;
