import { z } from 'zod';
import { DomainCreateWithoutProductsInputObjectSchema } from './DomainCreateWithoutProductsInput.schema';
import { DomainUncheckedCreateWithoutProductsInputObjectSchema } from './DomainUncheckedCreateWithoutProductsInput.schema';
import { DomainCreateOrConnectWithoutProductsInputObjectSchema } from './DomainCreateOrConnectWithoutProductsInput.schema';
import { DomainUpsertWithoutProductsInputObjectSchema } from './DomainUpsertWithoutProductsInput.schema';
import { DomainWhereUniqueInputObjectSchema } from './DomainWhereUniqueInput.schema';
import { DomainUpdateWithoutProductsInputObjectSchema } from './DomainUpdateWithoutProductsInput.schema';
import { DomainUncheckedUpdateWithoutProductsInputObjectSchema } from './DomainUncheckedUpdateWithoutProductsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DomainUpdateOneRequiredWithoutProductsNestedInput> =
  z
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
      upsert: z
        .lazy(() => DomainUpsertWithoutProductsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => DomainWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => DomainUpdateWithoutProductsInputObjectSchema),
          z.lazy(() => DomainUncheckedUpdateWithoutProductsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const DomainUpdateOneRequiredWithoutProductsNestedInputObjectSchema =
  Schema;
