import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { mfa_factorsCreateNestedOneWithoutMfa_challengesInputObjectSchema } from './mfa_factorsCreateNestedOneWithoutMfa_challengesInput.schema';

import type { Prisma } from '@prisma/client';

const literalSchema = z.union([z.string(), z.number(), z.boolean()]);
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
  z.union([
    literalSchema,
    z.array(jsonSchema.nullable()),
    z.record(jsonSchema.nullable()),
  ]),
);

const Schema: z.ZodType<Prisma.mfa_challengesCreateInput> = z
  .object({
    id: z.string(),
    created_at: z.coerce.date(),
    verified_at: z.coerce.date().optional().nullable(),
    ip_address: z.string(),
    otp_code: z.string().optional().nullable(),
    web_authn_session_data: z
      .union([z.lazy(() => NullableJsonNullValueInputSchema), jsonSchema])
      .optional(),
    mfa_factors: z.lazy(
      () => mfa_factorsCreateNestedOneWithoutMfa_challengesInputObjectSchema,
    ),
  })
  .strict();

export const mfa_challengesCreateInputObjectSchema = Schema;
