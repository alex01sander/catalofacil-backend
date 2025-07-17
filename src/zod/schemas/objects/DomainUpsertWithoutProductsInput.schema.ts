import { z } from 'zod';
import { DomainUpdateWithoutProductsInputObjectSchema } from './DomainUpdateWithoutProductsInput.schema';
import { DomainUncheckedUpdateWithoutProductsInputObjectSchema } from './DomainUncheckedUpdateWithoutProductsInput.schema';
import { DomainCreateWithoutProductsInputObjectSchema } from './DomainCreateWithoutProductsInput.schema';
import { DomainUncheckedCreateWithoutProductsInputObjectSchema } from './DomainUncheckedCreateWithoutProductsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DomainUpsertWithoutProductsInput> = z
  .object({
    update: z.union([
      z.lazy(() => DomainUpdateWithoutProductsInputObjectSchema),
      z.lazy(() => DomainUncheckedUpdateWithoutProductsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => DomainCreateWithoutProductsInputObjectSchema),
      z.lazy(() => DomainUncheckedCreateWithoutProductsInputObjectSchema),
    ]),
  })
  .strict();

export const DomainUpsertWithoutProductsInputObjectSchema = Schema;
