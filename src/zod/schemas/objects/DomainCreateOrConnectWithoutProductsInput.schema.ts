import { z } from 'zod';
import { DomainWhereUniqueInputObjectSchema } from './DomainWhereUniqueInput.schema';
import { DomainCreateWithoutProductsInputObjectSchema } from './DomainCreateWithoutProductsInput.schema';
import { DomainUncheckedCreateWithoutProductsInputObjectSchema } from './DomainUncheckedCreateWithoutProductsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DomainCreateOrConnectWithoutProductsInput> = z
  .object({
    where: z.lazy(() => DomainWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => DomainCreateWithoutProductsInputObjectSchema),
      z.lazy(() => DomainUncheckedCreateWithoutProductsInputObjectSchema),
    ]),
  })
  .strict();

export const DomainCreateOrConnectWithoutProductsInputObjectSchema = Schema;
