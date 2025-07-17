import { z } from 'zod';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { UsersRelationFilterObjectSchema } from './UsersRelationFilter.schema';
import { usersWhereInputObjectSchema } from './usersWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.store_settingsWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => store_settingsWhereInputObjectSchema),
        z.lazy(() => store_settingsWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => store_settingsWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => store_settingsWhereInputObjectSchema),
        z.lazy(() => store_settingsWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
    user_id: z
      .union([z.lazy(() => UuidFilterObjectSchema), z.string()])
      .optional(),
    store_name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    store_description: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    mobile_logo: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    desktop_banner: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    mobile_banner_color: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    mobile_banner_image: z
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
    store_subtitle: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    instagram_url: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    whatsapp_number: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    users: z
      .union([
        z.lazy(() => UsersRelationFilterObjectSchema),
        z.lazy(() => usersWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const store_settingsWhereInputObjectSchema = Schema;
