import { z } from 'zod';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { usersCreateNestedOneWithoutIdentitiesInputObjectSchema } from './usersCreateNestedOneWithoutIdentitiesInput.schema';

import type { Prisma } from '@prisma/client';

const literalSchema = z.union([z.string(), z.number(), z.boolean()]);
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
  z.union([
    literalSchema,
    z.array(jsonSchema.nullable()),
    z.record(jsonSchema.nullable()),
  ]),
);

const Schema: z.ZodType<Prisma.identitiesCreateInput> = z
  .object({
    provider_id: z.string(),
    identity_data: z.union([
      z.lazy(() => JsonNullValueInputSchema),
      jsonSchema,
    ]),
    provider: z.string(),
    last_sign_in_at: z.coerce.date().optional().nullable(),
    created_at: z.coerce.date().optional().nullable(),
    updated_at: z.coerce.date().optional().nullable(),
    email: z.string().optional().nullable(),
    id: z.string().optional(),
    users: z.lazy(() => usersCreateNestedOneWithoutIdentitiesInputObjectSchema),
  })
  .strict();

export const identitiesCreateInputObjectSchema = Schema;
