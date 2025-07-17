import { z } from 'zod';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { UuidNullableFilterObjectSchema } from './UuidNullableFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.instancesWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => instancesWhereInputObjectSchema),
        z.lazy(() => instancesWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => instancesWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => instancesWhereInputObjectSchema),
        z.lazy(() => instancesWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
    uuid: z
      .union([z.lazy(() => UuidNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    raw_base_config: z
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
  })
  .strict();

export const instancesWhereInputObjectSchema = Schema;
