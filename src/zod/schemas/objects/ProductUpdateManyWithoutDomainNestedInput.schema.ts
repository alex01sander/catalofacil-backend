import { z } from 'zod';
import { ProductCreateWithoutDomainInputObjectSchema } from './ProductCreateWithoutDomainInput.schema';
import { ProductUncheckedCreateWithoutDomainInputObjectSchema } from './ProductUncheckedCreateWithoutDomainInput.schema';
import { ProductCreateOrConnectWithoutDomainInputObjectSchema } from './ProductCreateOrConnectWithoutDomainInput.schema';
import { ProductUpsertWithWhereUniqueWithoutDomainInputObjectSchema } from './ProductUpsertWithWhereUniqueWithoutDomainInput.schema';
import { ProductCreateManyDomainInputEnvelopeObjectSchema } from './ProductCreateManyDomainInputEnvelope.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithWhereUniqueWithoutDomainInputObjectSchema } from './ProductUpdateWithWhereUniqueWithoutDomainInput.schema';
import { ProductUpdateManyWithWhereWithoutDomainInputObjectSchema } from './ProductUpdateManyWithWhereWithoutDomainInput.schema';
import { ProductScalarWhereInputObjectSchema } from './ProductScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpdateManyWithoutDomainNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(
          () => ProductUpsertWithWhereUniqueWithoutDomainInputObjectSchema,
        ),
        z
          .lazy(
            () => ProductUpsertWithWhereUniqueWithoutDomainInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ProductCreateManyDomainInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => ProductWhereUniqueInputObjectSchema),
        z.lazy(() => ProductWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => ProductWhereUniqueInputObjectSchema),
        z.lazy(() => ProductWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => ProductWhereUniqueInputObjectSchema),
        z.lazy(() => ProductWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ProductWhereUniqueInputObjectSchema),
        z.lazy(() => ProductWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => ProductUpdateWithWhereUniqueWithoutDomainInputObjectSchema,
        ),
        z
          .lazy(
            () => ProductUpdateWithWhereUniqueWithoutDomainInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => ProductUpdateManyWithWhereWithoutDomainInputObjectSchema),
        z
          .lazy(() => ProductUpdateManyWithWhereWithoutDomainInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => ProductScalarWhereInputObjectSchema),
        z.lazy(() => ProductScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ProductUpdateManyWithoutDomainNestedInputObjectSchema = Schema;
