import { z } from 'zod';
import { ProductCreateWithoutDomainInputObjectSchema } from './ProductCreateWithoutDomainInput.schema';
import { ProductUncheckedCreateWithoutDomainInputObjectSchema } from './ProductUncheckedCreateWithoutDomainInput.schema';
import { ProductCreateOrConnectWithoutDomainInputObjectSchema } from './ProductCreateOrConnectWithoutDomainInput.schema';
import { ProductCreateManyDomainInputEnvelopeObjectSchema } from './ProductCreateManyDomainInputEnvelope.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateNestedManyWithoutDomainInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ProductCreateWithoutDomainInputObjectSchema),
        z.lazy(() => ProductCreateWithoutDomainInputObjectSchema).array(),
        z.lazy(() => ProductUncheckedCreateWithoutDomainInputObjectSchema),
        z
          .lazy(() => ProductUncheckedCreateWithoutDomainInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ProductCreateOrConnectWithoutDomainInputObjectSchema),
        z
          .lazy(() => ProductCreateOrConnectWithoutDomainInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ProductCreateManyDomainInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => ProductWhereUniqueInputObjectSchema),
        z.lazy(() => ProductWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ProductCreateNestedManyWithoutDomainInputObjectSchema = Schema;
