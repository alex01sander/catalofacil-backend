import { z } from 'zod';
import { DomainCreateWithoutProductsInputObjectSchema } from './DomainCreateWithoutProductsInput.schema';
import { DomainUncheckedCreateWithoutProductsInputObjectSchema } from './DomainUncheckedCreateWithoutProductsInput.schema';
import { DomainCreateOrConnectWithoutProductsInputObjectSchema } from './DomainCreateOrConnectWithoutProductsInput.schema';
import { DomainWhereUniqueInputObjectSchema } from './DomainWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DomainCreateNestedOneWithoutProductsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => DomainCreateWithoutProductsInputObjectSchema),
        z.lazy(() => DomainUncheckedCreateWithoutProductsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => DomainCreateOrConnectWithoutProductsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => DomainWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const DomainCreateNestedOneWithoutProductsInputObjectSchema = Schema;
