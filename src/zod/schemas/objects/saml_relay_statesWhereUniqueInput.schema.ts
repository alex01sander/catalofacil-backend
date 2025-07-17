import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saml_relay_statesWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
  })
  .strict();

export const saml_relay_statesWhereUniqueInputObjectSchema = Schema;
