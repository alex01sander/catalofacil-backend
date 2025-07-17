import { z } from 'zod';
import { factor_typeSchema } from '../enums/factor_type.schema';
import { factor_statusSchema } from '../enums/factor_status.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { mfa_challengesCreateNestedManyWithoutMfa_factorsInputObjectSchema } from './mfa_challengesCreateNestedManyWithoutMfa_factorsInput.schema';

import type { Prisma } from '@prisma/client';

const literalSchema = z.union([z.string(), z.number(), z.boolean()]);
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
  z.union([
    literalSchema,
    z.array(jsonSchema.nullable()),
    z.record(jsonSchema.nullable()),
  ]),
);

const Schema: z.ZodType<Prisma.mfa_factorsCreateWithoutUsersInput> = z
  .object({
    id: z.string(),
    friendly_name: z.string().optional().nullable(),
    factor_type: z.lazy(() => factor_typeSchema),
    status: z.lazy(() => factor_statusSchema),
    created_at: z.coerce.date(),
    updated_at: z.coerce.date(),
    secret: z.string().optional().nullable(),
    phone: z.string().optional().nullable(),
    last_challenged_at: z.coerce.date().optional().nullable(),
    web_authn_credential: z
      .union([z.lazy(() => NullableJsonNullValueInputSchema), jsonSchema])
      .optional(),
    web_authn_aaguid: z.string().optional().nullable(),
    mfa_challenges: z
      .lazy(
        () => mfa_challengesCreateNestedManyWithoutMfa_factorsInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const mfa_factorsCreateWithoutUsersInputObjectSchema = Schema;
